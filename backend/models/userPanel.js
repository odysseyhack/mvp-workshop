'use strict';

module.exports = (sequelize, dataTypes) => {
  var UserPanel = sequelize.define('UserPanel', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user_panel',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  UserPanel.associate = function (models) {
    models.UserPanel.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.UserPanel.belongsTo(models.SolarPanel, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserPanel;
};
