const Movies = require('../model/Movie')

module.exports = {
    async getMovies(req,res){
        const movies = await Movies.findAll();
        console.log(movies);
    }
}