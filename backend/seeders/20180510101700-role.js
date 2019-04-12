'use strict';

const { Role } = require('../utils/enums');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [ {
      id: Role.CREATOR,
      name: 'CREATOR',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: Role.VALIDATOR,
      name: 'VALIDATOR',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: Role.HOLDER,
      name: 'HOLDER',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};
