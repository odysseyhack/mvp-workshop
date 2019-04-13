'use strict';

const { AuthorizationError } = require('../utils/errors');
const { Role } = require('../utils/enums');

module.exports = {
  roles
};

function roles (roles) {
  return function user (req, res, next) {
    if (isUserInAnyRole(req, roles)) {
      next();
    } else {
      next(new AuthorizationError());
    }
  };
}

function isUserInRole (req, roleId) {
  const all = req.session.user.roles || [];
  return all.indexOf(roleId) >= 0;
}

function isUserInAnyRole (req, roles) {
  const all = req.session.user.role || [];
  const test = roles || [];
  for (let i = 0; i < test.length; i++) {
    if (all.indexOf(test[i]) >= 0) {
      return true;
    }
  }

  return false;
}
