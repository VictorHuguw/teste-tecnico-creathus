const { Model, DataTypes } = require('sequelize');

class Movies extends Model {
    static init(sequelize) {
      super.init({
        autor: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        img: DataTypes.TEXT
      }, {
        sequelize
      })
    }
  }

module.exports = Movies