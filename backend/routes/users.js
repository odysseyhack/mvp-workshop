'use strict';

const utils = require('../utils/utils');
const Response = require('../utils/response');
const usersService = require('../services/users');

module.exports = {
  // login,
  register
};

async function register (req, res, next) {
  try {
    const request = utils.getSubset([
      'email', 'location', 'model_device', 'serial_number'
    ], req.body);

    await usersService.register(request, req.body.password);

    // create fully authenticated session
    // authc.setAuthenticated(req, sessionProperties);
    // authc.setTotpValidated(req);

    res.send(Response.success(request));
    res.end();
  } catch (err) {
    next(err);
  }
}

// async function login (req, res, next) {
//   try {
//     const sessionProperties = await usersService.login(req.body.email, req.body.password);

//     if (sessionProperties) {
//     //   authc.setAuthenticated(req, sessionProperties);
//       res.end();
//     } else {
//       next(new AuthenticationError());
//     }
//   } catch (err) {
//     next(new AuthenticationError(err));
//   }
// }
