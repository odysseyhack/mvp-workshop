'use strict';

module.exports = (sequelize, dataTypes) => {
  var UserAuth = sequelize.define('UserPanels', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    url: {
      type: dataTypes.STRING(512),
      allowNull: false
    },

    descripiton: {
      type: dataTypes.TEXT('medium'),
      allowNull: true
    },
    status: {
      type: dataTypes.ENUM('UNKNOWN', 'PENDING', 'COMPLETED'),
      allowNull: false
    }

  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user_panel',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return UserAuth;
};
