'use strict';

require('dotenv').config();

const config = {
  [process.env.NODE_ENV]: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },

  sequelizeOptions: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    },
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  sessionStoreOtions: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  constants: {},
  paths: {
    emailConfirmationSuccessPath: '/profile?emailConfirmationBackend=success',
    emailConfirmationFailurePath: '/profile?emailConfirmationBackend=failed'
  }
};

module.exports = config;
