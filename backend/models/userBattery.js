'use strict';

module.exports = (sequelize, dataTypes) => {
  var UserBattery = sequelize.define('UserBattery', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user_battery',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  UserBattery.associate = function (models) {
    models.UserAuth.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.UserAuth.belongsTo(models.Battery, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserBattery;
};
