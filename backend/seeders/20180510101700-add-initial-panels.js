'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('solar_panel', [{
      id: 1,
      producer: 'LG',
      model_number: 'BN512',
      max_output_power_wats: 1400,
      max_operating_temperature: 87,
      min_operating_temperature: -20,
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('solar_panel', null, {});
  }
};
