const express = require('express');
const routes = express.Router();
const MovieController = require('./src/controller/MoviesControlles')

routes.get('/movies', MovieController.getMovies);

module.exports = routes;