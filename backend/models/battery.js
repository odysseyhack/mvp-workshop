'use strict';

module.exports = (sequelize, dataTypes) => {
  var UserAuth = sequelize.define('Battery', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    kWh: {
      type: dataTypes.DECIMAL(40, 18),
      allowNull: false
    },

    mass: {
      type: dataTypes.DECIMAL(40, 18),
      allowNull: false
    },
    acidVolume: {
      type: dataTypes.DECIMAL(40, 18),
      allowNull: false
    },

    status: {
      type: dataTypes.ENUM('UNKNOWN', 'PENDING', 'DENIED', 'ACCEPTED'),
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'battery',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return UserAuth;
};
