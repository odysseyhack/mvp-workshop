'use strict';

const express = require('express');
const session = require('./session');
const bodyParser = require('body-parser');
const { health } = require('./health');
const val = require('../validators');
const users = require('./users');

const clientRouter = express.Router();

clientRouter.use(bodyParser.json());
clientRouter.use(bodyParser.urlencoded({
  extended: true
}));

clientRouter.use(session);
clientRouter.get('/health', health);
clientRouter.post('/users/register', val.user.register, users.register);

module.exports = {
  clientRouter
};
