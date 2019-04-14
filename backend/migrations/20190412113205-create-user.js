'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      email: {
        type: Sequelize.STRING(128),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },

      latitude: {
        type: Sequelize.STRING(128),
        allowNull: true
      },

      longitude: {
        type: Sequelize.STRING(128),
        allowNull: true
      },

      device_model: {
        type: Sequelize.STRING(128),
        allowNull: true
      },

      serial_number: {
        type: Sequelize.STRING(128),
        allowNull: true
      },

      company_name: {
        type: Sequelize.STRING(128),
        allowNull: true
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      charset: 'utf8'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};