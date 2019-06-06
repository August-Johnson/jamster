module.exports = function (sequelize, DataTypes) {
    const session = sequelize.define("session", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usr1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        inst1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        skill_level1: {
            type: DataTypes.INTEGER,
            allowNull: false
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
            allowNull: false,
            references: {
                model: 'instruments',
                key: 'id'
            }
        },
        skill_level2: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        skill_level3: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        skill_level4: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        skill_level5: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        scheduled_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scheduled_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING
    });

    // session.associate = function (models) {
    //     session.hasMany(models.user, { constraints: false });
    // }

    return session;
};
