'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      longitude: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      trail_name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      crowd_size: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      off_leash: {
        type: Sequelize.BOOLEAN
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trails');
  }
};