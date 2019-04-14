'use strict';

module.exports = (sequelize, dataTypes) => {
  var AdminVoting = sequelize.define('AdminVoting', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    voteType: {
      field: 'vote_type',
      type: dataTypes.STRING(256),
      allowNull: false
    },

    email: {
      field: 'email',
      type: dataTypes.STRING(256),
      allowNull: false
    },

    endsUntil: {
      field: 'ends_until',
      allowNull: false,
      type: dataTypes.DATE
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'admin_voting',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  AdminVoting.associate = function (models) {
    models.AdminVoting.hasMany(models.AdminVotes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return AdminVoting;
};
