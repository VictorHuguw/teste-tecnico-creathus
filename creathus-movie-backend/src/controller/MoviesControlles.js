const Movies = require("../model/Movie");

module.exports = {

  async getMovies(req, res) {
    
    const movies = await Movies.findAll();

    res.status(200).json({ message: "success", data: movies, code: 200 });

  },

  async createMovies(req, res) {
    
    try {

      const data = {
        autor: req.body.autor,
        description: req.body.description,
        title: req.body.title,
        img: req.file.originalname,
      };

      const existDuplicateDate = await Movies.findOne(
        {
          where: {
            autor: data.autor,
            title: data.title,
          },
        },
        { raw: true ,logging: console.log}
      );

      if(existDuplicateDate){
        return res.status(409).json({message:"Duplicated data",code: 409})
      }else{
          const movies = await Movies.create(data);
          return res.status(200).json({ message: "success", code: 200 });
      }

    } catch (error) {
      return res.status(400).json({ message: error.message, code: 400 });
    }
  },

};


