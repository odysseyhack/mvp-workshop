'use strict';

module.exports = (sequelize, dataTypes) => {
  var PanelVoting = sequelize.define('PanelVoting', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    voteType: {
      field: 'vote_type',
      type: dataTypes.ENUM('UNKNOWN', 'ADD', 'REMOVE'),
      allowNull: false
    },

    endsUntil: {
      field: 'ends_until',
      allowNull: false,
      type: dataTypes.DATE
    },

    isActive: {
      field: 'is_active',
      allowNull: false,
      type: dataTypes.BOOLEAN
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'panel_voting',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  PanelVoting.associate = function (models) {
    models.PanelVoting.belongsTo(models.SolarPanel, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PanelVoting;
};
