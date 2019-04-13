'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('info_source', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      url: {
        type: Sequelize.STRING(512),
        allowNull: false
      },

      descripiton: {
        type: Sequelize.TEXT('medium'),
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('UNKNOWN', 'PENDING', 'COMPLETED'),
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
    return queryInterface.dropTable('info_source');
  }
};
