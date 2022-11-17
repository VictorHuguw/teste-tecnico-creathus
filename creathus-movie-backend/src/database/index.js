const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Movies = require('../model/Movie');
const connection = new Sequelize(dbConfig);

Movies.init(connection);

module.exports = connection