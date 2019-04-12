'use sctrict';

const db = require('../models');
const passwords = require('../utils/password');
const errors = require('../utils/errors');
const auth = require('./auth');
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
      email
    }
  });
}

async function register (request, password) {
  try {
    const alreadyExist = await getUser(request.email);
    if (alreadyExist) {
      throw new errors.ConflictError();
    }

    const User = await db.User.create(request).catch((err) => console.log(err));

    if (!User) {
      throw new Error('Failed to create a user');
    }

    const hash = await passwords.createHash(password);

    await db.UserAuth.create({ 'UserId': User.id, 'hash': hash });
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
