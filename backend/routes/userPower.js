'use strict';

const Response = require('../utils/response');
const usersPowerService = require('../services/userPower');

module.exports = {
  statistic
};

async function statistic (req, res, next) {
  // const userId = req.session.user.id;
  const userId = 1;
  const statistic = await usersPowerService.getStatistic(userId);
  
  res.send(statistic).end();
}
