'use strict';

require('dotenv').config();

const logger = require('./utils/logger');
const http = require('http');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require('./models');
const { error } = require('./routes/handlers');

const { clientRouter } = routes;
const { PORT, WEB_APP_BASE_URL } = process.env;
const clientBaseUrl = '/api/v1/';

db.sequelize.authenticate().then(() => {
  logger.info('Database successfully connected!');
}).catch((err) => {
  logger.error(err);
});

const app = express();

// global middleware
app.use(morgan('dev'));
app.use(cors({
  'origin': WEB_APP_BASE_URL,
  'credentials': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));

// setup client routes
app.use(clientBaseUrl, clientRouter);
app.use(error);

const server = http.createServer(app);

server.listen(PORT, () => logger.info(`Listening on ${PORT}`));

module.exports = server;
