'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Aliens', [
        {
          nombre: "Mordisquitos",
          specie: "Xenomorph",
          year: "2021-02-02"
        },
        {
          nombre: "ET",
          specie: "Xenomorph",
          year: "2021-02-02"
        },
        {
          nombre: "Denver",
          specie: "Xenomorph",
          year: "2021-02-02"
        },
        {
          nombre: "Colorado",
          specie: "Xenomorph",
          year: "2021-02-02"
        },
      ]

      );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
