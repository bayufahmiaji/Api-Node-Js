const Sequelize = require('sequelize');

const sequelize = new Sequelize('uasweb', 'root', 'bay123', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3307'
});

module.exports = sequelize;