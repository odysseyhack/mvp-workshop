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

      location: {
        type: Sequelize.STRING(128),
        allowNull: false
      },

      device_model: {
        type: Sequelize.STRING(128),
        allowNull: false
      },

      serial_number: {
        type: Sequelize.STRING(128),
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
    }, {
      charset: 'utf8'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
