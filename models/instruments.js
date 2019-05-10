module.exports = function(sequelize, DataTypes) {
    var instrument = sequelize.define("instrument", {
      instrument: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return instrument;
  };
  