module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instrument: {
      type: DataTypes.INTEGER,
      references: {
        model: 'instruments',
        key: 'id'
      },
      allowNull: false
    }
  });

  user.associate = function (models) {

    user.belongsToMany(models.session, { through: models.user_session });
  }

  return user;
};
