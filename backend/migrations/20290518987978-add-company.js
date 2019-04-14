'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'user',
      'company', {
        type: Sequelize.STRING(256),
        allowNull: true
      }),
    queryInterface.addColumn(
      'user',
      'name', {
        type: Sequelize.STRING(256),
        allowNull: true
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('user', 'company'),
      queryInterface.removeColumn('user', 'name')
    ]);
  }
};
