module.exports = function (sequelize, DataTypes) {
    var user_instrument = sequelize.define("user_instrument", {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        instrument_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        skill_level: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    user_instrument.associate = function (models) {
        user_instrument.belongsTo(models.user, {
            foreignKey: 'id'
        });
    }

    return user_instrument;
};
