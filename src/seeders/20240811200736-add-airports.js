'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Airports',
      [
        {
          name: 'Kempegowda International Airport Bengaluru',
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hubballi Airport',
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jindal Vijaynagar Airport',
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mysuru Airport',
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kalaburagi Airport',
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Indira Gandhi International Airport',
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chhatrapati Shivaji Maharaj International Airport',
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Netaji Subhas Chandra Bose International Airport',
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chennai International Airport',
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Cochin International Airport',
          cityId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Goa International Airport',
          cityId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sardar Vallabhbhai Patel International Airport',
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trivandrum International Airport',
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Rajiv Gandhi International Airport',
          cityId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Biju Patnaik International Airport',
          cityId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
