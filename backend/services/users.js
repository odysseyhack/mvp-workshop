'use sctrict';

const db = require('../models');
const passwords = require('../utils/password');
const errors = require('../utils/errors');
const auth = require('./auth');
const { Role } = require('../utils/enums');
const fs = require('fs');
const inputStream = fs.createReadStream('./resources/power.csv', 'utf8');
const CsvReadableStream = require('csv-reader');
const readXlsxFile = require('read-excel-file/node');
const util = require('../utils/utils');
const { getSolarPanel, getUserPanel } = require('./panel');
const {
  AuthenticationError,
  InvalidRequestError,
  ConflictError
} = require('../utils/errors');

module.exports = {
  login,
  register,
  checkIfUserExists,
  getAdmins,
  addSolarPanel
};

let excel, csv;

async function getAdmins () {
  const admins = await db.User.findAll({
    where: {
      role_id: 2
    }
  });
  return admins;
}

async function checkIfUserExists (email) {
  const found = await db.User.findOne({ where: { email: email }, attributes: ['email'], raw: true });
  return found != null;
}

async function getUser (email) {
  return db.User.findOne({
    where: {
      email: email
    }
  });
}

async function register (request, password, randomHash) {
  try {
    const alreadyExist = await getUser(request.email);
    if (alreadyExist) {
      throw new errors.ConflictError();
    }

    if (randomHash) {
      request.role_id = await validHash(randomHash);
      const data = util.decrypt(randomHash);
      request = {
        ...request,
        ...JSON.parse(data)
      };
    } else {
      request.role_id = Role.HOLDER;
    }

    if (!request.role_id) {
      throw new errors.ConflictError();
    }

    const User = await db.User.create(request);

    if (!User) {
      throw new Error('Failed to create a user');
    }

    const hash = await passwords.createHash(password);

    const excel = await prepareFromExcel();
    const csv = await prepareFromCSV(User.id);

    const statistics = prepareFileForDatabse(csv, excel);
    await db.UserPower.bulkCreate(statistics);

    await db.UserAuth.create({ 'user_id': User.id, 'hash': hash });
    return getSessionProperties(User.get());
  } catch (err) {
    throw err;
  }
}

async function validHash (hash) {
  const correct = await db.Hash.findOne({
    where: {
      hash: hash,
      expired: false
    }
  });

  if (correct) {
    correct.expired = true;
    await correct.save();
    return Role.VALIDATOR;
  }

  return undefined;
}

function prepareFileForDatabse (csv = [], excel = []) {
  const statistics = [];
  let csvRow = csv.pop();
  let excelRow = excel.pop();

  while (csvRow && excelRow) {
    if (excelRow.produced - csvRow.grid >= 0) {
      statistics.push({
        ...csvRow,
        ...excelRow,
        consumed: excelRow.produced - csvRow.grid
      });
    }

    excelRow = excel.pop();
    csvRow = csv.pop();
  }

  return statistics;
}

async function prepareFromExcel () {
  const database = [];

  if (excel) {
    return excel;
  }

  await new Promise((resolve, reject) => {
    readXlsxFile('./resources/excel.xlsx').then((rows) => {
      if (rows.length) {
        for (let i in rows) {
          if (typeof rows[i][60] !== 'number') {
            continue;
          }

          database.push({
            produced: rows[i][60]
          });
        }
      }
      resolve(database);
    });
  });
  excel = database;
  return database;
}

async function prepareFromCSV (userId) {
  let dataTodatabase = [];

  if (csv) {
    return csv;
  }

  dataTodatabase = await new Promise((resolve, reject) => {
    inputStream
      .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true, skipHeader: true }))
      .on('data', function (row) {
        excel.push(row)
        dataTodatabase.push({
          grid: row[7],
          date: row[4],
          user_id: userId
        });

        if (row[0] === 20) {
          resolve(dataTodatabase);
        }
      })
      .on('end', function (data) { 
      });
  });
  
  csv = dataTodatabase;
  return dataTodatabase;
}

async function login (email, password) {
  const User = await getUser(email);

  if (!User) {
    throw new AuthenticationError();
  }

  const ok = await auth.checkPassword(User.id, password);
  if (!ok) {
    throw new AuthenticationError();
  }

  return getSessionProperties(User.get());
}

async function getSessionProperties (obj) {
  return {
    id: obj.id,
    email: obj.email,
    role: [ obj.role_id ]
  };
}

async function addSolarPanel (userId, data) {
  const panel = await getSolarPanel(data.panelId);
  if (!panel) {
    throw new InvalidRequestError();
  }

  const alreadyExists = await getUserPanel(userId, panel.id);
  if (alreadyExists) {
    throw new ConflictError();
  }

  const userPanels = {
    solar_panel_id: panel.id,
    user_id: userId
  };

  await db.UserPanel.create(userPanels);
}
