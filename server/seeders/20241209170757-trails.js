'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trails', [
      {
        latitude:40.77772013287278, 
        longtitude: -111.88435159005783,
        trail_name: 'Memory Grove',
        crowd_size: '10 people on trail',
        description: 'Nice off leash area near creek. Some areas on leash only.',
        off_leash: 'yes',
        rating: 5
      },
      {
        latitude:44.74996796652615, 
        longtitude: -84.67556849347511, 
        trail_name: 'Hartwick Pines State Park',
        crowd_size: '3 people on trail',
        description: 'Paved and unpaved trails. Good length variety. Only on leash.',
        off_leash: 'no',
        rating: 5
      },
 

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trails', null, {})
  }
};