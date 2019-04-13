const db = require('../models');

module.exports = {
  getSolarPanel,
  createPanel
};

async function getSolarPanel (id) {
  return db.SolarPanel.findOne({
    where: {
      id
    }
  });
}

async function createPanel (data) {
  await db.SolarPanel.create(data);
}
