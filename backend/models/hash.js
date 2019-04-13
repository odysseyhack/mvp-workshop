'use strict';

module.exports = (sequelize, DataTypes) => {
  var Hash = sequelize.define('Hash', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    hash: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'hash',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return Hash;
};
