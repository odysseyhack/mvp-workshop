'use sctrict';

const db = require('../models');
const passwords = require('../utils/password');
const errors = require('../utils/errors');
const auth = require('./auth');
const { Role } = require('../utils/enums');
const fs = require('fs');
const CsvReadableStream = require('csv-reader');
const readXlsxFile = require('read-excel-file/node');
const inputStream = fs.createReadStream('./resources/power.csv', 'utf8');
const {
  AuthenticationError
} = require('../utils/errors');

module.exports = {
  login,
  register,
  checkIfUserExists
};

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
      request.RoleId = await validHash(randomHash);

      if (!request.RoleId) {
        throw new errors.ConflictError();
      }
    }

    if (!request.RoleId) {
      request.RoleId = Role.HOLDER;
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

    await db.UserAuth.create({ 'UserId': User.id, 'hash': hash });
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

  await new Promise((resolve, reject) => {
    readXlsxFile('./resources/excel.xlsx').then((rows) => {
      for (let i in rows) {
        if (typeof rows[i][60] !== 'number') {
          continue;
        }

        database.push({
          produced: rows[i][60]
        });
      }

      resolve(database);
    });
  });

  return database;
}

async function prepareFromCSV (userId) {
  let dataTodatabase = [];

  dataTodatabase = await new Promise((resolve, reject) => {
    inputStream
      .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true, skipHeader: true }))
      .on('data', function (row) {
        dataTodatabase.push({
          grid: row[7],
          date: row[4],
          UserId: userId
        });

        if (row[0] === 20) {
          resolve(dataTodatabase);
        }
      })
      .on('end', function (data) {});
  });

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
    role: [ obj.RoleId ]
  };
}
