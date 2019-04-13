'use strict';

const db = require('../../models');
const dataMapper = require('./dataMapper');

module.exports = {
  getStatistic
};

async function getStatistic (userId) {
  const statistic = await db.UserPower.findAll({
    where: {
      user_id: userId
    }
  });

  return dataMapper.mapStatistic(statistic);
}
