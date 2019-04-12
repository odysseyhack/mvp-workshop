'use strict';

const mailService = require('./transporter');

class EmailSender {
  async sendEmail (options, view, data) {
    let setup = {
      from: options.from,
      to: options.to,
      subject: options.subject
    };

    return new Promise((resolve, reject) => {
      mailService.sendMail(setup, function (error, info) {
        if (error) {
          resolve(false);
        } else {
          console.log('Email sent: ' + info.response);
          resolve(true);
        }
      });
    });
  }
}

module.exports = EmailSender;
