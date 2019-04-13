'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'user',
      'role_id', {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: 'role',
          key: 'id'
        }
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'role');
  }
};
