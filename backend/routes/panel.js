const panelService = require('../services/panel');
const Response = require('../utils/response');

module.exports = {
  getPanels,
  createPanelVote,
  createPanelDownvote,
  getSuggestionList,
  addNewVote
};

async function getPanels (req, res, next) {
  try {
    const panels = await panelService.getPanels();
    res.send(Response.success(panels)).end();
  } catch (err) {
    next(err);
  }
}

async function createPanelVote (req, res, next) {
  try {
    const panels = await panelService.createPanelVote(req.session.user.id, req.body);
    res.send(Response.success(panels)).end();
  } catch (err) {
    next(err);
  }
}

async function createPanelDownvote (req, res, next) {
  try {
    const panels = await panelService.createPanelDownvote(req.session.user.id, req.params.panelId);
    res.send(Response.success(panels)).end();
  } catch (err) {
    next(err);
  }
}

async function getSuggestionList (req, res, next) {
  try {
    const panels = await panelService.getSuggestionList();
    res.send(Response.success(panels)).end();
  } catch (err) {
    next(err);
  }
}

async function addNewVote (req, res, next) {
  try {
    const vote = await panelService.newVote(+req.params.suggestionId, req.session.user.id, req.body.isUpvote);
    res.send(Response.success(vote)).end();
  } catch (err) {
    next(err);
  }
}
