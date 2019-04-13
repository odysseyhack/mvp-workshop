'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('solar_panel', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      producer: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      model_number: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      max_output_power_wats: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },

      max_operating_temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      min_operating_temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('solar_panel');
  }
};
