const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require('./database');
const dbAssociation = require("./Associations");
const Albumcontrol = require('./album-control');
const Songcontrol = require('./songs-control');


/* 
require('./composer-model');
require('./lyricist-model');
require('./singers-model');
require('./songs-model'); */

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to music library application." });
});

//app.post('/albums',Albumcontrol.create);

app.get('/albums', Albumcontrol.findAll);

app.get('/songs', Songcontrol.findAll);

app.delete('/albums/:albumId', Albumcontrol.deleteAlbum);

app.put('/albums/:albumID', Albumcontrol.update);

app.post("/albums/:albumId/songs", Songcontrol.createSong);

/**
 *  router.post("/albums",albums.createAlbum);
    
    // fetch single song details using the id given in params
    router.get("/albums/:albumId/songs/:songId",albums.findSongbyId );

  
    //updating song info under an album
    router.put("/albums/:albumId/songs/:songId", albums.updateSong );

    //creating a new song under an album 
    router.post("/albums/:albumId/songs",albums.createSong );
    

    //delete a song from an existing music album 
    router.delete("/albums/:albumId/songs/:songId", albums.deleteSong );

 */

//db.sequelize.sync();

dbAssociation.sequelize.sync({ force: true }).then(
    result => {
        app.listen(
            4141, () => console.log('Server RUnning on 4141'));
        console.log("Drop and re-sync db.");
    });
