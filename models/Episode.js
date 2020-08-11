const Sequelize = require('sequelize');

const sequelize = require('../common/sequelize');

class Episode extends Sequelize.Model {}

Episode.init({
    name: Sequelize.STRING,
    anime: Sequelize.STRING,
    episode: Sequelize.INTEGER,
    realesed: Sequelize.STRING,
    video: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {sequelize, modelName: "episode"});

sequelize.sync();

module.exports = Episode;