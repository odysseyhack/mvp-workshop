'use sctict';

const { vk } = require('../resources');
const { body } = require('express-validator/check');

const register1 = [
  body('email')
    .trim()
    .not().isEmpty().withMessage(vk('mail_req'))
    .isEmail().withMessage(vk('mail_valid'))
    .isLength({ max: 128 }).withMessage(vk('mail_long')),
  body('password')
    .not().isEmpty().withMessage(vk('pass_req'))
    .isLength({ min: 8 }).withMessage(vk('pass_min'))
];

const register2 = [
  body('location')
    .trim()
    .not().isEmpty().withMessage(vk('mail_req'))
    .isLength({ max: 128 }).withMessage(vk('mail_long'))
];

const register3 = [
  body('device_model')
    .trim()
    .not().isEmpty().withMessage(vk('device_model_req')),
  body('serial_number')
    .trim()
    .not().isEmpty().withMessage(vk('serial_req'))
];

const register = [];
register.push(register1, register2, register3);

module.exports = {
  register1,
  register2,
  register,
  login: register1
};
