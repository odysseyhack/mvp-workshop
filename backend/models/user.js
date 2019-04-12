'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    email: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false
    },

    latitude: {
      type: DataTypes.STRING(128),
      allowNull: false
    },

    longitude: {
      type: DataTypes.STRING(128),
      allowNull: false
    },

    device_model: {
      type: DataTypes.STRING(128),
      allowNull: false
    },

    serial_number: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  User.associate = function (models) {
    models.User.hasOne(models.UserAuth, { foreignKey: { allowNull: false } });
    models.User.belongs(models.Role, { foreignKey: { allowNull: false } });
  };

  return User;
};
