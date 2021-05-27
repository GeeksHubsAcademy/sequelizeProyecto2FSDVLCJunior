'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alien.belongsToMany(models.Pasajero, {
        through: 'PasajeroAlien',
        as: 'pasajeros',
        foreignKey: 'alienId',
        otherKey: 'pasajeroId'
      });
    }
  };
  Alien.init({
    nombre: DataTypes.STRING,
    specie: DataTypes.STRING,
    year: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alien',
  });
  return Alien;
};