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
      'Airplanes',
      [
        {
          modelNumber: 'Airbus A380-800',
          capacity: 853,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 747-8 Intercontinental',
          capacity: 605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 777-300ER',
          capacity: 550,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Airbus A350-1000',
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Airbus A340-600',
          capacity: 475,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 777-200LR',
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 787-10 Dreamliner',
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Airbus A330-300',
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 747-400',
          capacity: 660,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 777-9 ',
          capacity: 630,
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
