'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'hash',
      'email', {
        type: Sequelize.STRING(256),
        allowNull: true
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('hash', 'email')
    ]);
  }
};
