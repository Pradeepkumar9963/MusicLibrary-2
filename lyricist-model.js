const Sequelize = require('sequelize');
const sequilizeConnection = require('./database');
 const Lyricist = sequilizeConnection.define("Lyricists", {
    Lyricist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    Lyricist_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
       
    },
});
module.exports = Lyricist;