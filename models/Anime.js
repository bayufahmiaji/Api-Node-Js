const Sequelize = require('sequelize');

const sequelize = require('../common/sequelize');

class Anime extends Sequelize.Model {}

Anime.init({
    name: Sequelize.STRING,
    rating: Sequelize.INTEGER,
    episode: Sequelize.INTEGER,
    realesed: Sequelize.STRING,
    synopsis: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {sequelize, modelName: "anime"});

sequelize.sync();

module.exports = Anime;