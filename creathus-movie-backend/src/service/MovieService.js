const Movies = require("../model/Movie");


module.export = {

    existDuplicate(data) {
        const result = Movies.findOne(
          {
            where: {
              autor: data.autor,
              title: data.title,
            },
          },
          { raw: true ,logging: console.log}
        );
    
        console.log('aaaaaaa',result)
    
        if(result){
            return true
        }else{
            return false
        }
    
      }
    

}
