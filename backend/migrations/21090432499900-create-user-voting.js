'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admin_voting', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      vote_type: {
        type: Sequelize.ENUM('UNKNOWN', 'ADD', 'REMOVE'),
        allowNull: false
      },

      email: {
        type: Sequelize.STRING(256),
        allowNull: false
      },

      ends_until: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('admin_voting');
  }
};
