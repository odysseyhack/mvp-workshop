'use strict';

module.exports = (sequelize, DataTypes) => {
  var UserPower = sequelize.define('UserPower', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    time: {
      type: DataTypes.DATE,
      allowNull: false
    },

    power: {
      type: DataTypes.STRING(128),
      allowNull: false
    },

    model: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user_power',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  UserPower.associate = function (models) {
    models.UserAuth.belongsTo(models.User, {
      onDelete: 'CASCADE', // todo: FK is on delete 'set null', and column is null
      foreignKey: {
        allowNull: false,
        underscored: true
      }
    });
  };

  return UserPower;
};
