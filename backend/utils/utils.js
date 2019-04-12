'use strict';

const crypto = require('crypto');

const isHexRegExp = new RegExp('^[0-9A-Fa-fx]+$');

const getSubset = (keys, obj) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
const invert = (data) => Object.entries(data).reduce((obj, [key, value]) => ({ ...obj, [value]: key }), {});

module.exports = {
  getSubset,
  invert,
  getTotpChangeSecret,
  getPasswordChangeSecret,
  getRandomString,
  isOnlyHexChars
};

function getTotpChangeSecret () {
  return getRandomString(64);
}

function getPasswordChangeSecret () {
  return getRandomString(64);
}

function getRandomString (length) {
  return crypto.randomBytes(length).toString('hex');
}

function isOnlyHexChars (string) {
  return isHexRegExp.test(string);
}
