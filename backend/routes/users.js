'use strict';

const utils = require('../utils/utils');
const Response = require('../utils/response');
const usersService = require('../services/users');
const authc = require('./authc');
const { AuthenticationError } = require('../utils/errors');

module.exports = {
  login,
  register,
  me,
  addSolarPanel
};

async function register (req, res, next) {
  try {
    const request = utils.getSubset([
      'email', 'latitude', 'device_model', 'serial_number', 'longitude'
    ], req.body);

    const sessionProps = await usersService.register(request, req.body.password, req.body.hash);

    // create fully authenticated session
    authc.setAuthenticated(req, sessionProps);

    res.send(Response.success(sessionProps)).end();
  } catch (err) {
    next(err);
  }
}

async function login (req, res, next) {
  try {
    const sessionProperties = await usersService.login(req.body.email, req.body.password);
    authc.setAuthenticated(req, sessionProperties);
    res.status(200).end();
  } catch (err) {
    next(new AuthenticationError(err));
  }
}

async function addSolarPanel (req, res, next) {
  try {
    const data = {
      panelId: req.body.panelId,
      maxPower: req.body.maxPower,
      minOperatingTemperature: req.body.minOperatingTemperature,
      maxOperatingTemperature: req.body.maxOperatingTemperature
    };

    await usersService.addSolarPanel(req.session.user.id, data);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
}

async function me (req, res, next) {
  if (req.session.state) {
    res.status(200).send(Response.success(req.session.user)).end();
  } else {
    return next(new AuthenticationError());
  }
}
