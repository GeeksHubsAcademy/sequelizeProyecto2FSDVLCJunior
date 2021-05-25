'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Naves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      codigo: {
        type: Sequelize.STRING
      },
      fechafabricacion: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.STRING
      },
      origen: {
        type: Sequelize.STRING
      },
      aforo: {
        type: Sequelize.INTEGER
      },
      reparaciones: {
        type: Sequelize.BOOLEAN
      },
      emergencia: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Naves');
  }
};