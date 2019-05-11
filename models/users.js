module.exports = function(sequelize, DataTypes) {
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
      email: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return user;
  };
  