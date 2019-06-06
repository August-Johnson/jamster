module.exports = function (sequelize, DataTypes) {
  var instrument = sequelize.define("instrument", {
    instrument: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  instrument.associate = function (models) {

    instrument.belongsTo(models.user, { constraints: false });

  }

  return instrument;
};
