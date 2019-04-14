'use strict';

const adminService = require('../services/admin');
const Response = require('../utils/response');

module.exports = {
  addNewVote,
  createAdminVote
};

async function createAdminVote (req, res, next) {
  try {
    const admins = await adminService.createAdminVote(req.session.user.id, req.body);
    res.send(Response.success(admins)).end();
  } catch (err) {
    next(err);
  }
}

async function addNewVote (req, res, next) {
  try {
    const vote = await adminService.newVote(+req.params.suggestionUserId, req.session.user.id);
    res.send(Response.success(vote)).end();
  } catch (err) {
    next(err);
  }
}
