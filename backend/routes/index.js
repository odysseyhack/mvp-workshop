'use stict';

const express = require('express');
const session = require('./session');
const bodyParser = require('body-parser');
const { health } = require('./health');
const users = require('./users');
const val = require('../validators');
const h = require('./handlers');

const clientRouter = express.Router();

clientRouter.use(bodyParser.json());
clientRouter.use(bodyParser.urlencoded({
  extended: true
}));

clientRouter.use(session);
clientRouter.get('/health', health);
clientRouter.post('/users/register', val.user.register, users.register);

// client validation helpers resources
clientRouter.post(`/validations/register1`, val.user.register1, h.ok);
clientRouter.post(`/validations/register2`, val.user.register2, h.ok);

module.exports = {
  clientRouter
};
