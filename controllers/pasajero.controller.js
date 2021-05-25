const { Pasajero } = require('../models');


class Viajero {

    async allPassengers(){

        return Pasajero.findAll();

    }

    async passengerId(id){

        return Pasajero.findByPk(id);

    }

    async newPassenger(body){

        return Pasajero.create(body);

    }

}

let pasajeroController = new Viajero();
module.exports = pasajeroController;