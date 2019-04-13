'use strict';

const { AuthorizationError, AuthenticationError } = require('../utils/errors');
const STATE_AUTHENTICATED = 1;

function setAuthenticated (req, sessionProperties) {
  if (sessionProperties) {
    req.session.user = sessionProperties;
    req.session.state = STATE_AUTHENTICATED;
  }
}

function isAuthc (req, res, next) {
  if (req.session && req.session.state === 1) {
    return next();
  } else {
    next(new AuthenticationError());
  }
}

function isAuthz (idLabel) {
  return function (req, res, next) {
    if (req.session.user.id === +req.params[idLabel]) {
      next();
    } else {
      return next(new AuthorizationError());
    }
  };
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
  isAuthc,
  isAuthz,
  service
};
