'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Bananas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING,
      },
    cost: {
        type: Sequelize.FLOAT,
    },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Bananas');
  }
};
