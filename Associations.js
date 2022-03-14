const {Sequelize,Datatypes} = require('sequelize');
const sequelize = require('./database');

const dbAssociation = {};

dbAssociation.Sequelize = Sequelize;
dbAssociation.sequelize = sequelize;

dbAssociation.Albums = require("./album-model");
dbAssociation.Composers = require("./composer-model");
dbAssociation.Singers = require("./singers-model");
dbAssociation.Lyricists = require("./lyricist-model");
dbAssociation.Songs = require("./songs-model");

// db.Songs.belongsTo(db.Albums, {as : 'Album', foreignKey: 'fk_album'});
// db.Songs.belongsTo(db.Composers, {as : 'Composer', foreignKey: 'fk_composer'});
// db.Songs.belongsTo(db.Singers, {as : 'Singer', foreignKey: 'fk_singer'});
// db.Songs.belongsTo(db.Lyricists, {as : 'Lyricist', foreignKey: 'fk_lyricist'});

dbAssociation.Albums.hasMany(dbAssociation.Songs);
dbAssociation.Songs.belongsTo(dbAssociation.Albums);
dbAssociation.Composers.hasMany(dbAssociation.Songs);
dbAssociation.Singers.hasMany(dbAssociation.Songs);
dbAssociation.Lyricists.hasMany(dbAssociation.Songs);

module.exports = dbAssociation;