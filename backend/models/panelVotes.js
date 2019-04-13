'use strict';

module.exports = (sequelize, dataTypes) => {
  var PanelVotes = sequelize.define('PanelVotes', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    isUpvote: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_upvote'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'panel_votes',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  PanelVotes.associate = function (models) {
    models.PanelVotes.belongsTo(models.PanelVoting, {
      foreignKey: {
        allowNull: false
      }
    });
    models.PanelVotes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PanelVotes;
};
