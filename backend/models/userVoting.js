'use strict';

module.exports = (sequelize, dataTypes) => {
  var UserVoting = sequelize.define('UserVoting', {
    id: {
      type: dataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    vote_type: {
      type: dataTypes.ENUM('UNKNOWN', 'ACCEPT_HOUSEHOLD', 'ACCEPT_VALIDATOR', 'DOWNGRADE_HOUSEHOLD', 'DOWNGRADE_VALIDATOR'),
      allowNull: false
    },

    user_id: {
      type: dataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    ends_until: {
      allowNull: false,
      type: dataTypes.DATE
    }
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'user_voting',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });

  UserVoting.associate = function (models) {
    models.UserVoting.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserVoting;
};
