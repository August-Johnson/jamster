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
    }
  });

  user.associate = function (models) {
    user.hasMany(models.user_instrument, {
      onDelete: "cascade"
    });
  }

  return user;
};
