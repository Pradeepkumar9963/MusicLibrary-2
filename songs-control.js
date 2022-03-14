const Album = require("./album-model");
const Songs = require("./songs-model");
const Singers = require("./singers-model");
const Composer = require("./composer-model");
const Lyricist = require("./lyricist-model");
const sequelize = require('sequelize');
const t = await sequelize.transaction();

const findAll = async (req, res) => {
    try{
        const song = await Songs.findAll({
            include:{
                model:Album
            }
        })
      
        res.send(song)
    
  }
  catch(err){
      console.log(err);
    }
   
    const createSong = async (req,res) => {
        try{
          const albumId = req.params.albumId;
      
          const check_album = await Album.findByPk(albumId)
          if (!check_album) {
           return  res.status(404).json({ error: "album is not present" });
          } 
          let song = req.body.song;
            const songs = await check_album.createSong({
              Song_title: song.Name,
              Song_length: song.length
            })
      
            let singer = song.Singer;
            for(let i in singer){
              const check_singer = await Singers.findOne({where:{Song_title: singer[i].Song_title}})
      
              if(check_singer === null){
              const Singers = await Singers.create({
                Song_title: singer[i].Song_title
              })
              await songs.addSinger(Singers);
            }else{
              await songs.addSinger(check_singer);
            }
            }
      
           let composer = song.Composer;
           for(let i in composer){
            const check_composer = await Composer.findOne({where:{Composer_name: composer[i].Composer_name }})
      
             if(check_composer === null){
             const composers = await Composer.create({
                Composer_name: composer[i].Composer_name
             })
             await songs.addComposer(composers);
            }else{
             await songs.addComposer(check_composer);
            }
           }
      
           let lyricist = song.Lyricist;
           for(let i in lyricist){
             const check_lyricist = await Lyricist.findOne({where:{Lyricist_name: lyricist[i].Lyricist_name}})
      
             if(check_lyricist === null){
             const Lyricists = await Lyricist.create({
                Lyricist_name: lyricist[i].Lyricist_name
             })
             await songs.addLyricist(Lyricists);
           }else{
             await songs.addLyricist(check_lyricist)
           }
          }
          res.send("Sucessfull!");
        }catch(err)
        {
          console.log(err);
        }
       
      }
  };

module.exports={findAll,createSong};