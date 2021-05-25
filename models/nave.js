'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pasajero,{
        foreignKey:'naveId'
      });
    }
  };
  Nave.init({
    nombre: DataTypes.STRING,
    modelo: DataTypes.STRING,
    codigo: DataTypes.STRING,
    fechafabricacion: DataTypes.DATE,
    tipo: DataTypes.STRING,
    origen: DataTypes.STRING,
    aforo: DataTypes.INTEGER,
    reparaciones: DataTypes.BOOLEAN,
    emergencia: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Nave',
  });
  return Nave;
};