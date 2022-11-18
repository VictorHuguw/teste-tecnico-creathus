const express = require('express');
const routes = express.Router();
const MovieController = require('./src/controller/MoviesControlles')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../creathus-movie-frontend/src/assets/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})


routes.get('/movies', MovieController.getMovies);
routes.post('/movie',upload.single('img'), MovieController.createMovies);

module.exports = routes;