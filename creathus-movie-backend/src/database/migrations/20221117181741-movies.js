'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('movies',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      autor:{
        type: Sequelize.STRING,
        allowNull:false
      },
      title:{
        type: Sequelize.STRING,
        allowNull:false
      },
      description:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      img:{
        type: Sequelize.TEXT,
        allowNull:false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
