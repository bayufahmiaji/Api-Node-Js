const Anime = require('../models/Anime');

module.exports.postAddAnime = (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    let realesed = req.body.realesed;
    let episode = req.body.episode;
    let synopsis = req.body.synopsis;

    Anime.findOne({ where: { name: name } })
        .then(anime => {
           //add anime
            return Anime.create({ name: name, rating: rating, episode: episode, realesed: realesed, synopsis:synopsis});
            
        }).then(updatedAnime => {
            res.send({'status': 200, 'data': updatedAnime});
        }).catch((error) => {
            throw new Error(error);
        });
}
module.exports.postUpdateAnime = (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    let realesed = req.body.realesed;
    let episode = req.body.episode;
    let synopsis = req.body.synopsis;


    Anime.findOne({ where: { name: name } })
        .then(anime => {
           //update anime
           return Anime.update({
                name: name, rating: rating, episode: episode, realesed: realesed, synopsis:synopsis ,
            }, {
                where: {
                    name: name,
                }
            });
        }).then(updatedAnime => {
            res.send({'status': 200, 'data': updatedAnime});
        }).catch((error) => {
            throw new Error(error);
        });
}

//melihat semua anime
module.exports.getall = (req, res) => {
    Anime
        .findAll()
        .then((anime) => {
            res.send({'status': 200, 'data': anime});
        })
        .catch((error) => {
            console.log(error);
        })
}

//get by name
module.exports.getByName = (req, res) => {
    Anime.findOne({
        where: {
            name: req.params.name
        }
    }).then(anime => {
        res.send({'status': 200, 'data': anime});
    }).catch((error) => {
        console.log(error);
    });  
}
//get by realesed
module.exports.getByRealesed = (req, res) => {
    Anime.findAll({
        where: {
            realesed: req.params.realesed
        }
    }).then(anime => {
        res.send({'status': 200, 'data': anime});
    }).catch((error) => {
        console.log(error);
    });  
}
//get by rating
module.exports.getByRating = (req, res) => {
    Anime.findAll({
        where: {
            rating: req.params.rating
        }
    }).then(anime => {
        res.send({'status': 200, 'data': anime});
    }).catch((error) => {
        console.log(error);
    });  
}


//delete anime
module.exports.delete = (req, res) => {
    Anime.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedRecorded) {
        res.send({'status': 200, 'data': "Delete Success"});
    }).catch((error) => {
        console.log(error);
    });  
}