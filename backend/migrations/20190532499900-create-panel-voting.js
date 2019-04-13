'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('panel_voting', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      vote_type: {
        type: Sequelize.ENUM('UNKNOWN', 'ADD', 'REMOVE'),
        allowNull: false
      },

      solar_panel_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'solar_panel',
          key: 'id'
        }
      },

      ends_until: {
        allowNull: false,
        type: Sequelize.DATE
      },

      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('panel_voting');
  }
};
