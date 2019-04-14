const EmailSender = require('./index');
const crypto = require('crypto');
const util = require('../../utils/utils');

const emailSender = new EmailSender();

emailSender.sendEmail({ to: 'jjovanovic24@hotmail.com', subject: 'TEST MAIL'}, util.encrypt(JSON.stringify({ name: 'neko neko', company: 'MVP' }))).then((res) => {
  console.log(res);
});
