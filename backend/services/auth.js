'use strict';

const db = require('../models');
const passwords = require('../utils/password');

module.exports = {
  checkPassword
};

async function checkPassword (userId, password) {
  const userAuth = await getUserAuth(userId);

  const ok = await passwords.check(password, userAuth.hash);

  return ok;
}

async function getUserAuth (userId) {
  const result = await db.UserAuth.findOne({
    where: {
      user_id: userId
    }
  });

  return result;
}
