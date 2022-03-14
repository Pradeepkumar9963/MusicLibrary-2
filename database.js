const Sequelize = require('sequelize');
const Connection = new Sequelize('musiclibrary', 'root', 'Pradeep', { dialect: 'mysql', host: 'localhost' });
console.log('DB Connected');
module.exports = Connection;