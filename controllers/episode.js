const Episode = require('../models/Episode');
const Anime = require('../models/Anime');

//add episode
module.exports.postAddEpisode = (req, res) => {
    //deklarasi value
    let name = req.body.name;
    let anime = req.body.anime;
    let realesed = req.body.realesed;
    let episode = req.body.episode;
    let video = req.body.video;


    //menambah episode
    Episode.findOne({ where: { name: name } })
        .then(episode => {
            //input episode
            Episode.create({ name: name, anime: anime, episode: episode, realesed: realesed, video:video});
            //update episode
            updateAnime(anime,episode);

        }).then(updateEpisode => {
            res.send({'status': 200, 'data': updateEpisode});
        }).catch((error) => {
            throw new Error(error);
        });
}

//update episode
module.exports.postUpdateEpisode = (req, res) => {
    //deklarasi value
    let name = req.body.name;
    let anime = req.body.anime;
    let realesed = req.body.realesed;
    let episode = req.body.episode;
    let video = req.body.video;


    //update episode
    Episode.findOne({ where: { name: name } })
        .then(episode => {
            return Episode.update({
                name: name, anime: anime, episode: episode, realesed: realesed, video:video,
            }, {
                where: {
                    name: name,
                }
            });

        }).then(updateEpisode => {
            res.send({'status': 200, 'data': updateEpisode});
        }).catch((error) => {
            throw new Error(error);
        });
}

function updateAnime(anime,episode) {
    return Anime.update({
        //set episode in anime table
        episode: episode ,
    }, {
        where: {
        //where name 
            name: anime,
        }
    });
}

//melihat semua episode
module.exports.getall = (req, res) => {
    Episode
        .findAll()
        .then((episode) => {
            res.send({'status': 200, 'data': episode});
        })
        .catch((error) => {
            console.log(error);
        })
}

//get by anime
module.exports.getByAnime = (req, res) => {
    Episode.findAll({
        where: {
            anime: req.params.anime
        }
    }).then(anime => {
        res.send({'status': 200, 'data': anime});
    }).catch((error) => {
        console.log(error);
    });  
}

//delete episode
module.exports.delete = (req, res) => {
    Episode.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedRecorded) {
        res.send({'status': 200, 'data': "Delete Success"});
    }).catch((error) => {
        console.log(error);
    });  
}