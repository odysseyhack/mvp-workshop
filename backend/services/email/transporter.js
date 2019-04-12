'use strict';

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const mailAccountUser = process.env.EMAIL_ACCOUNT;
const mailAccountPassword = process.env.EMAIL_PASSWORD;

const transport = nodemailer.createTransport(smtpTransport({
  host: 'smtp.gmail.com',
  service: 'Gmail',
  auth: {
    user: mailAccountUser,
    pass: mailAccountPassword
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
}));

module.exports = transport;
