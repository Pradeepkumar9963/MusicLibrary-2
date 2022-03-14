const Sequelize = require('sequelize');
const sequilizeConnection = require('./database');

const Singers = sequilizeConnection.define('Singers', {
    Singer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    Singer_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
});
module.exports = Singers;
