'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('battery', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      kWh: {
        type: Sequelize.DECIMAL(40, 18),
        allowNull: false
      },

      mass: {
        type: Sequelize.DECIMAL(40, 18),
        allowNull: false
      },
      acidVolume: {
        type: Sequelize.DECIMAL(40, 18),
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM('UNKNOWN', 'PENDING', 'DENIED', 'ACCEPTED'),
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
    return queryInterface.dropTable('battery');
  }
};
