'use strict';

module.exports = (sequelize, dataTypes) => {
  var AdminVotes = sequelize.define('AdminVotes', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'admin_votes',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  AdminVotes.associate = function (models) {
    models.AdminVotes.belongsTo(models.AdminVoting, {
      foreignKey: {
        allowNull: false
      }
    });
    models.AdminVotes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return AdminVotes;
};
