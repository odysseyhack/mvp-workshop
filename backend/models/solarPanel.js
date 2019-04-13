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
    },
    status: {
      type: dataTypes.ENUM('UNKNOWN', 'PENDING', 'DENIED', 'ACTIVE'),
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'solar_panel',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  return SolarPanel;
};
