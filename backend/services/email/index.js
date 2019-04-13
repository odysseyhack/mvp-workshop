'use strict';

const mailService = require('./transporter');
const fromAccount = process.env.EMAIL_ACCOUNT;
const db = require('../../models');
const crypto = require('crypto');
const url = process.env.HOST_URL;

class EmailSender {
  async sendEmail (options) {
    const hash = crypto.randomBytes(128).toString('hex');

    let setup = {
      from: fromAccount,
      to: options.to,
      subject: options.subject,
      text: url + hash
    };

    await Promise.all([
      mailService.sendMail(setup),
      db.Hash.create({hash: hash})
    ]);
  }
}

module.exports = EmailSender;
