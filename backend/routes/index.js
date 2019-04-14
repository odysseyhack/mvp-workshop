'use stict';

const express = require('express');
const session = require('./session');
const bodyParser = require('body-parser');
const { health } = require('./health');
const users = require('./users');
const userPower = require('./userPower');
const val = require('../validators');
const h = require('./handlers');
const authc = require('./authc');
const authz = require('./authz');
const { Role } = require('../utils/enums');
const auth = require('./authc');
const panelRoute = require('./panel');
const adminRoute = require('./admin');

const clientRouter = express.Router();

clientRouter.use(bodyParser.json());
clientRouter.use(bodyParser.urlencoded({
  extended: true
}));

clientRouter.use(session);
clientRouter.get('/health', health);
clientRouter.post('/users/me', users.me);

clientRouter.post('/users/logout', users.logout);

clientRouter.post('/users/login', val.user.login, users.login);
clientRouter.post('/users/register', val.user.register, users.register);
clientRouter.get('/users/statistic', userPower.statistic);

clientRouter.get('/admin/users/pending', authc.service, authz.roles([Role.VALIDATOR]), health);
clientRouter.get('/admin/list', authc.service, authz.roles([Role.VALIDATOR]), users.admins);

// client validation helpers resources
clientRouter.post(`/validations/register1`, val.user.register1, h.ok);
clientRouter.post(`/validations/register2`, val.user.register2, h.ok);

clientRouter.post('/users/:id/solar-panels', auth.isAuthc, auth.isAuthz('id'), users.addSolarPanel);
clientRouter.get('/users/:id/solar-panels', auth.isAuthc, auth.isAuthz('id'), users.getSolarPanels);

clientRouter.get('/solar-panels', panelRoute.getPanels);

clientRouter.get('/households', users.getHouseholds);

clientRouter.post('/validators/:id/solar-panels', auth.isAuthc, auth.isAuthz('id'), panelRoute.createPanelVote);
clientRouter.post('/validators/:id/solar-panels/:panelId/downvote', auth.isAuthc, auth.isAuthz('id'), panelRoute.createPanelDownvote);
clientRouter.post('/validators/:id/solar-panels/suggestions/:suggestionId/vote', auth.isAuthc, auth.isAuthz('id'), panelRoute.addNewVote);

clientRouter.post('/validators/admin', auth.isAuthc, adminRoute.createAdminVote);
clientRouter.post('/validators/:id/admin/:suggestionUserId/vote', auth.isAuthc, /* auth.isAuthz('id'), */ adminRoute.addNewVote);

clientRouter.get('/solar-panels/suggestions', panelRoute.getSuggestionList);
module.exports = {
  clientRouter
};
