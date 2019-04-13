'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_power', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },

      date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      produced: {
        type: Sequelize.BIGINT,
        allowNUll: false
      },

      grid: {
        type: Sequelize.BIGINT,
        allowNUll: false
      },

      consumed: {
        type: Sequelize.DOUBLE,
        allowNUll: false
      },

      model: {
        type: Sequelize.STRING(128),
        allowNUll: true
      },

      user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
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
    return queryInterface.dropTable('user_power');
  }
};
