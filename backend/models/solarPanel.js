'use strict';

module.exports = (sequelize, dataTypes) => {
  var SolarPanel = sequelize.define('SolarPanel', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    producer: {
      type: dataTypes.STRING(32),
      allowNull: false
    },
    modelNumber: {
      type: dataTypes.STRING(64),
      allowNull: false,
      field: 'model_number'
    },
    maxOutputPowerWats: {
      type: dataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      field: 'max_output_power_wats'
    },
    maxOperatingTemperature: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'max_operating_temperature'
    },
    minOperatingTemperature: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'min_operating_temperature'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'solar_device',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  SolarPanel.associate = function (models) {
    models.SolarPanel.belongsTo(models.User, {
      onDelete: 'CASCADE', // todo: FK is on delete 'set null', and column is null
      foreignKey: {
        allowNull: false
      }
    });
  };

  return SolarPanel;
};
