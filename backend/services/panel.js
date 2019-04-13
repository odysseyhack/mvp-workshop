const db = require('../models');
const enums = require('../utils/enums');
const errors = require('../utils/errors');

module.exports = {
  getSolarPanel,
  createPanelVote,
  getUserPanel,
  getPanels,
  createPanelDownvote: createPanelRemovalVoting,
  getSuggestionList,
  newVote
};

async function getSolarPanel (id) {
  return db.SolarPanel.findOne({
    where: {
      id
    }
  });
}

async function createPanelVote (userId, data) {
  const fillData = {
    producer: data.producer,
    modelNumber: data.modelNumber,
    maxOutputPowerWats: data.maxOutputPowerWats,
    maxOperatingTemperature: data.maxOperatingTemperature,
    minOperatingTemperature: data.minOperatingTemperature,
    status: enums.PanelStatus.PENDING
  };

  const panel = await db.SolarPanel.create(fillData);
  await createVoting(panel.id, enums.VoteStatus.ADD);

  return panel.get();
}

async function createPanelRemovalVoting (userId, panelId) {
  let panelVoting = await getActivePanelVoting(panelId);
  if (panelVoting) {
    throw new errors.ConflictError();
  }

  const voting = await createVoting(panelId, enums.VoteStatus.REMOVE);
  await addVote(voting.id, userId, true);

  return voting.get();
}

async function newVote (panelVotingId, userId, isUpvote) {
  const vote = await findVote(panelVotingId, userId);
  if (vote) {
    throw new errors.ConflictError();
  }

  return addVote(panelVotingId, userId, isUpvote);
}

async function addVote (panelVotingId, userId, isUpvote) {
  const data = {
    panel_voting_id: panelVotingId,
    user_id: userId,
    isUpvote
  };

  const vote = await db.PanelVotes.create(data);
  return vote.get();
}

async function getSuggestionList () {
  return db.PanelVoting.findAll({
    where: {
      isActive: true
    }
  });
}

async function findVote (panelVotingId, userId) {
  return db.PanelVotes.findOne({
    where: {
      panel_voting_id: panelVotingId,
      user_id: userId
    }
  });
}

async function createVoting (panelId, voteType) {
  const voting = {
    solar_panel_id: panelId,
    endsUntil: new Date(),
    voteType: enums.VoteStatus.REMOVE,
    isActive: true
  };

  return db.PanelVoting.create(voting);
}

async function getActivePanelVoting (panelId) {
  return db.PanelVoting.findOne({
    where: {
      solar_panel_id: panelId,
      isActive: true
    }
  });
}

async function getUserPanel (userId, panelId) {
  return db.UserPanel.findOne({
    where: {
      user_id: userId,
      solar_panel_id: panelId
    }
  });
}

async function getPanels () {
  return db.SolarPanel.findAll();
}
