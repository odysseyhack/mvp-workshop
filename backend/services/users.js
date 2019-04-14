'use sctrict';

const db = require('../models');
const passwords = require('../utils/password');
const errors = require('../utils/errors');
const auth = require('./auth');
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
  addSolarPanel,
  createUserVoting
};

async function checkIfUserExists (email) {
  const found = await db.User.findOne({ where: { email: email }, attributes: ['email'], raw: true });
  return found != null;
}

async function getUser (email) {
  return db.User.findOne({
    where: {
      email: email
    },
    attributes: ['email']
  });
}

async function register (request, password) {
  try {
    const alreadyExist = await getUser(request.email);
    if (alreadyExist) {
      throw new errors.ConflictError();
    }
    request.role_id = 1;
    const User = await db.User.create(request);

    if (!User) {
      throw new Error('Failed to create a user');
    }

    const hash = await passwords.createHash(password);

    await db.UserAuth.create({ 'user_id': User.id, 'hash': hash });
    return getSessionProperties(User.get());
  } catch (err) {
    throw err;
  }
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
    email: obj.email
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

async function createUserVoting (userId, data) {
  const fillData = {
    producer: data.producer,
    modelNumber: data.modelNumber,
    maxOutputPowerWats: data.maxOutputPowerWats,
    maxOperatingTemperature: data.maxOperatingTemperature,
    minOperatingTemperature: data.minOperatingTemperature,
    status: enums.PanelStatus.PENDING
  };

  const panel = await db.SolarPanel.create(fillData);
  await createVoting(panel.id, enums.VoteStatus.ADD);

  return panel.get();
}