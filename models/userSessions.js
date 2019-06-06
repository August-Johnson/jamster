module.exports = function (sequelize, DataTypes) {
    var user_session = sequelize.define("user_session", {
        // user: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'users',
        //         key: 'id'
        //     },
        //     allowNull: false
        // },
        // session: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'sessions',
        //         key: 'id'
        //     },
        //     allowNull: false
        // }
    });

    return user_session;
};
