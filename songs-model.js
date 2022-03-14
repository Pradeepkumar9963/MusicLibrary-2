const Sequelize = require('sequelize');
const sequilizeConnection = require('./database');

const Songs = sequilizeConnection.define('Songs', {
    Song_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    Song_title: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    Song_length: { type: Sequelize.INTEGER },
});

module.exports = Songs;
