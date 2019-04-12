'use sctrict';

const db = require('../models');
const passwords = require('../utils/password');

module.exports = {
  // login,
  register,
  checkIfUserExists
};

async function checkIfUserExists (email) {
  const found = await db.User.findOne({ where: { email: email }, attributes: ['email'], raw: true });

  return found != null;
}

async function register (request, password) {
  try {
    const User = await db.User.create(request);

    if (!User) {
      throw new Error('Failed to create a user');
    }

    const hash = await passwords.createHash(password);

    await db.UserAuth.create({'user_id': User.id, 'hash': hash});
  } catch (err) {
    throw err;
  }
}

// async function login (email, password) {
//   const User = await db.User.findOne({
//     where: {
//       email: email,
//       enabled: true
//     },
//     attributes: sessionProperties,
//     include: [{
//       model: db.UserAuth,
//       attributes: ['id', 'hash', 'attempt_counter', 'last_attempt_time']
//     }]
//   });

//   if (!User || !User.UserAuth) {
//     return false;
//   }

//   const ok = await auth.checkPassword(User.id, password);

//   if (!ok) {
//     return false;
//   }

//   const roles = await getRoleIds(User.dataValues.id);

//   return getSessionProperties(User.dataValues, roles);
// }
