const express = require('express');
const session = require('./session');
const bodyParser = require('body-parser');
const { health } = require('./health');

const clientRouter = express.Router();

clientRouter.use(bodyParser.json());
clientRouter.use(bodyParser.urlencoded({
  extended: true
}));

clientRouter.use(session);
clientRouter.get('/health', health);

module.exports = {
  clientRouter
};
