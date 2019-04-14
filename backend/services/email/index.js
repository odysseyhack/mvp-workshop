'use strict';

const mailService = require('./transporter');
const fromAccount = process.env.EMAIL_ACCOUNT;
const db = require('../../models');
const url = process.env.HOST_URL;

class EmailSender {
  async sendEmail (options, content) {    
    let setup = {
      from: fromAccount,
      to: options.to,
      subject: options.subject,
      text: url + content
    };

    await Promise.all([
      mailService.sendMail(setup),
      db.Hash.create({hash: content})
    ]);
  }
}

module.exports = EmailSender;
