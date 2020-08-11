const express = require('express');
const router = express.Router();

const animeController = require('../controllers/anime');
const episodeController = require('../controllers/episode');

//anime
	//add anime
	router.post('/anime/add-anime', animeController.postAddAnime);
	//update anime
	router.post('/anime/update-anime', animeController.postUpdateAnime);
	//get all anime
	router.get('/anime', animeController.getall);
	//get by name
	router.get('/anime/name/:name',animeController.getByName);
	//get by realesed
	router.get('/anime/realesed/:realesed',animeController.getByRealesed);
	//get by rating
	router.get('/anime/rating/:rating',animeController.getByRating);
	//get by rating
	router.get('/anime/delete/:id',animeController.delete);


//episode
	//add episode
	router.post('/anime/add-episode', episodeController.postAddEpisode);
	//update episode
	router.post('/anime/update-episode', episodeController.postUpdateEpisode);
	//get all episode
	router.get('/episode', episodeController.getall);
	//get by anime
	router.get('/episode/anime/:anime', episodeController.getByAnime);
	//delete
	router.get('/episode/delete/:id',episodeController.delete);

module.exports = router;