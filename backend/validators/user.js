'use strict';

const { check, body, param } = require('express-validator/check');
const { vk } = require('../resources');
const custom = require('./custom');

const register1 = [
  body('email')
    .trim()
    .not().isEmpty().withMessage(vk('mail_req'))
    .isEmail().withMessage(vk('mail_valid'))
    .isLength({ max: 128 }).withMessage(vk('mail_long'))
    .custom(custom.validateUserEmail).withMessage(vk('mail_already_use')),
  body('password')
    .not().isEmpty().withMessage(vk('pass_req'))
    .isLength({ min: 8 }).withMessage(vk('pass_min'))
    .custom(custom.hasDigits).withMessage(vk('pass_digits'))
    .custom(custom.hasLetters).withMessage(vk('pass_non_digits'))
];

const register2 = [
  body('location')
    .trim()
    .not().isEmpty().withMessage(vk('fn_req'))
    .isLength({ max: 128 }).withMessage(vk('fn_long'))
];

const register3 = [
  body('model_device')
    .trim()
    .not().isEmpty().withMessage(vk('fn_req'))
    .isLength({ max: 128 }).withMessage(vk('fn_long')),
  body('serial_number')
    .trim()
    .not().isEmpty().withMessage(vk('fn_req'))
    .isLength({ max: 128 }).withMessage(vk('fn_long'))
];

const register = [];
register.push(register1, register2, register3);

module.exports = {
  register1,
  register2,
  register
};
