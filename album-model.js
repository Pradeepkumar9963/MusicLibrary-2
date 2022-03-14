const Sequelize = require('sequelize');
const sequilizeConnection = require('./database');

const Album = sequilizeConnection.define('Albums',
    {
        Album_id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Album_name: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        Album_year: { type: Sequelize.INTEGER, }
    });

module.exports = Album;
