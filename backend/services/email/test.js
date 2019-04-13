const EmailSender = require('./index');
const crypto = require('crypto');

const emailSender = new EmailSender();

emailSender.sendEmail({ to: 'jjovanovic24@hotmail.com', subject: 'TEST MAIL' }).then((res) => {
  console.log(res);
});
