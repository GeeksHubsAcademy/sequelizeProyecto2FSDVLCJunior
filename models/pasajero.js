'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasajero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pasajero.belongsTo(models.Nave, {foreignKey: 'naveId'})
    }
  };
  Pasajero.init({
    naveId: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    especialidad: DataTypes.STRING,
    origen: DataTypes.STRING,
    nacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pasajero',
  });
  return Pasajero;
};