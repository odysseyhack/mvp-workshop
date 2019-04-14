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
      allowNull: true
    },

    longitude: {
      type: DataTypes.STRING(128),
      allowNull: true
    },

    device_model: {
      type: DataTypes.STRING(128),
      allowNull: true
    },

    serial_number: {
      type: DataTypes.STRING(128),
      allowNull: true
    },

    name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },

    company: {
      type: DataTypes.STRING(128),
      allowNull: true
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
    models.User.hasMany(models.UserPower, { foreignKey: { allowNull: false } });
    models.User.belongsTo(models.Role, {
      onDelete: 'CASCADE', // todo: FK is on delete 'set null', and column is null
      foreignKey: {
        allowNull: false,
        underscored: true,
        as: 'role_id'
      } });
  };

  return User;
};
