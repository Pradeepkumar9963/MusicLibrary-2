const Album = require("./album-model");
const Songs = require("./songs-model");
const Composer = require("./composer-model");
const lyricist = require("./lyricist-model");
const Singers = require("./singers-model");
const {sequelize,Transaction} = require('sequelize');

const t = await sequelize.transaction();
const findAll = async (req, res) => {
    
    try{
  
      const album = AlbumModel.findAll({
          include:{
              model: Songs,
              include:[{
                  model: Singers,
                  through:{
  
                  }
              },
              {
                  model: Composer,
                  through:{
  
                  }
              },
              {
                  model: lyricist,
                  through:{
      
                  }
              }  
          ]}
  
      }) 
      
      res.send(album)
      
    }catch(err){
      console.log(err);
    }
   
  };
  
  /*const create =  async (req, res) => {
    const t = await sequelize.transaction(); 
    try{
        const Album_id =req.body.id;
     const Album_name =req.body.title;
     const Album_year = req.body.Year;
     const album = await AlbumModel.create({Album_id:id,Album_name: title,Album_year: Year},{transaction:t});
     //creating Songs 
      let song = req.body.song;
      for(let i in song){
        const songs = await album.createSong({Name: song[i].Name,length: song[i].length},{transaction:t})
        //creating singer
        let singer = song[i].Singer;
        for(let j in singer){
          const check_singer = await SingerModel.findOne({where:{Name: singer[j].Name}},{transaction:t})
          // check if already exists
          if(check_singer === null){
          const Singers = await SingerModel.create({
            Name: singer[j].Name 
          },{transaction:t})
          await songs.addSinger(Singers,{transaction:t});
        }else{
          await songs.addSinger(check_singer,{transaction:t});
        }
        }
       //creating composers
       let composer = song[i].Composer;
       for(let k in composer){
        const check_composer = await ComposerModel.findOne({where:{Name: composer[k].Name}},{transaction:t})
        // check if already exists
         if(check_composer === null){
         const composers = await ComposerModel.create({
           Name: composer[k].Name
         },{transaction:t})
         await songs.addComposer(composers,{transaction:t});
        }else{
         await songs.addComposer(check_composer,{transaction:t});
        }
       }
       //creating lyricists
       let lyricist = song[i].Lyricist;
       for(let l in lyricist){
         const check_lyricist = await LyricistModel.findOne({where:{Name: lyricist[l].Name}},{transaction:t})
         // check if already exists
         if(check_lyricist === null){
         const Lyricists = await LyricistModel.create({
           Name: lyricist[l].Name
         },{transaction:t})
         await songs.addLyricist(Lyricists,{transaction:t});
       }else{
         await songs.addLyricist(check_lyricist,{transaction:t})
       }
      }
  }
  await t.commit();
  res.json(album)
  }catch(err){
    console.log(err);
    await t.rollback();
  }
  }
*/

const update = async (req, res) => {
    try{
      const albumId = req.params.albumId;
      const check_album = await Album.findByPk(albumId)
        if (!check_album) {
         return  res.status(404).json({ error: "album is not present" });
        } 
      const Album_name = req.body.title;
      const Album_year = req.body.Year;
  
      const album = await check_album.update({Album_name:title,Album_year:Year})
  
     res.send(album)
    }catch(err){
      console.log(err);
    }
   
  };

  const deleteAlbum = async (req, res) => {
    try{
      const albumId = req.params.albumId;
      const check_album = await Album.findByPk(albumId)
      if(!check_album){
        return  res.status(404).json({ error: "The album could not be found." });
      }
      await check_album.destroy();
      res.send("Deleted Album sucessfully!")
    }catch(err){
      console.log(err);
    }
   
    
  };
module.exports = { findAll, create, createSongs, update, deleteAlbum };