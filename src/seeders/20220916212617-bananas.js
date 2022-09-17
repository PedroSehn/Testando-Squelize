'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.bulkInsert('Bananas', [
    {
      name: 'caturra',
      cost: 6.00,
    },
    {
      name: 'docinha',
      cost: 10.00,
    },
    {
      name: 'da terra',
      cost: 3.00,
    },
   ])
  },

  async down (queryInterface, Sequelize) {
   queryInterface.bulkDelete('Bananas', null, {});
  }
};
