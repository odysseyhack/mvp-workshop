'use strict';

const services = require('../services/users');

const lettersRegexp = new RegExp('[^0-9]');
const digitsRegexp = new RegExp('[0-9]');

module.exports = {
  hasLetters,
  hasDigits,
  validateUserEmail
};

async function hasLetters (v) {
  if (!lettersRegexp.test(v)) {
    throw new Error();
  }
}

async function hasDigits (value) {
  if (!digitsRegexp.test(value)) {
    throw new Error();
  }
}

async function validateUserEmail (email) {
  const ok = await services.checkIfUserExists(email);

  if (ok) {
    throw new Error();
  }
}
