'use strict';

const aesjs = require('aes-js');

const isHexRegExp = new RegExp('^[0-9A-Fa-fx]+$');
const secret = process.env.SECRET_KEY;

const getSubset = (keys, obj) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
const invert = (data) => Object.entries(data).reduce((obj, [key, value]) => ({ ...obj, [value]: key }), {});

module.exports = {
  getSubset,
  invert,
  getTotpChangeSecret,
  getPasswordChangeSecret,
  getRandomString,
  isOnlyHexChars,
  encrypt,
  decrypt
};

function encrypt (string) {
  const key = aesjs.utils.utf8.toBytes(secret).slice(0, 32);
  const textBytes = aesjs.utils.utf8.toBytes(string);
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(42));
  const encryptedBytes = aesCtr.encrypt(textBytes);
  const encryptedText = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedText;
}

function decrypt (string) {
  const key = aesjs.utils.utf8.toBytes(secret).slice(0, 32);
  const textBytes = aesjs.utils.hex.toBytes(string);
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(42));
  const decryptedBytes = aesCtr.decrypt(textBytes);
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}
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
