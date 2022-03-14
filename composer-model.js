const Sequelize = require('sequelize');
const sequilizeConnection = require('./database');
const Composer = sequilizeConnection.define("Composers", {
    Composer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    Composer_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    }
});
module.exports = Composer;