const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./common/sequelize');

const app = express();

// Parsing JSON from incoming request
app.use(bodyParser.json());

const routesController = require('./routes/routes');

app.use(routesController);

app.listen(3000, 'localhost', () => {
    console.log('Server started');

    // Database connection test
    sequelize
        .authenticate()
        .then(() => {
            console.log('Database connected');
        })
        .catch((e) => {
            console.error(e);
        });
});