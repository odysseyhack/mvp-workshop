'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'user',
        'longitude', {
          type: Sequelize.STRING(128),
          allowNull: true
        }
      ),
      queryInterface.changeColumn(
        'user',
        'latitude', {
          type: Sequelize.STRING(128),
          allowNull: true
        }
      ),
      queryInterface.changeColumn(
        'user',
        'device_model', {
          type: Sequelize.STRING(128),
          allowNull: true
        }
      ),
      queryInterface.changeColumn(
        'user',
        'serial_number', {
          type: Sequelize.STRING(128),
          allowNull: true
        }
      ),
      queryInterface.changeColumn(
        'user',
        'latitude', {
          type: Sequelize.STRING(128),
          allowNull: true
        }
      )

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'user',
        'longitude', {
          type: Sequelize.STRING(128),
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'user',
        'device_model', {
          type: Sequelize.STRING(128),
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'user',
        'serial_number', {
          type: Sequelize.STRING(128),
          allowNull: false
        }
      )

    ]);
  }
};
