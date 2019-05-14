module.exports = function (sequelize, DataTypes) {
    const session = sequelize.define("session", {
        name: DataTypes.STRING,
        usr1: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst1: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        usr2: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst2: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        usr3: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst3: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        usr4: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst4: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        usr5: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst5: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        scheduled: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: DataTypes.STRING
    });
    return session;
};
