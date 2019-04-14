'use strict';

const db = require('../models');
const enums = require('../utils/enums');
const errors = require('../utils/errors');
const crypto = require('../utils/utils');

module.exports = {
  newVote,
  createAdminVote
};

async function createAdminVote (userId, data) {
  const fillData = {
    name: data.name,
    company: data.company
  };

  const hash = crypto.encrypt(JSON.stringify(fillData));

  await db.Hash.create({
    hash: hash,
    email: data.email
  });

  const voting = await createVoting(data.email);

  return voting.get();
}

async function createVoting (email, state) {
  const voting = {
    email: email,
    endsUntil: new Date(),
    voteType: enums.VoteStatus.ADD
  };

  return db.AdminVoting.create(voting);
}

async function newVote (adminVotingId, userId) {
  const vote = await findVote(adminVotingId);
  if (!vote) {
    throw new errors.ConflictError();
  }

  const data = await addVote(vote.id, userId);

  return data;
}

async function addVote (voteId, userId) {
  return db.AdminVotes.create({
    admin_voting_id: voteId,
    user_id: userId
  });
}

async function findVote (voltingId) {
  return db.AdminVoting.findOne({
    where: {
      id: voltingId
    }
  });
}
