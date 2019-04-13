'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_voting', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      vote_type: {
        type: Sequelize.ENUM('UNKNOWN', 'ACCEPT_HOUSEHOLD', 'ACCEPT_VALIDATOR', 'DOWNGRADE_HOUSEHOLD', 'DOWNGRADE_VALIDATOR'),
        allowNull: false
      },

      user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
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
    return queryInterface.dropTable('user_voting');
  }
};
