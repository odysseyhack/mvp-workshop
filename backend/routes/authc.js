'use strict';

const { AuthenticationError } = require('../utils/errors');

const STATE_AUTHENTICATED = 1;

function setAuthenticated (req, sessionProperties) {
  if (sessionProperties) {
    req.session.user = sessionProperties;
    req.session.state = STATE_AUTHENTICATED;
  }
}

function service (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    next(new AuthenticationError());
  }
}

module.exports = {
  setAuthenticated,
  service
};
