const pasajeroController = require('./pasajero.controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Wayco tiene futbolin";

class LoginController {
    async validate(nombreCheck,passwordCheck){

        let pasajero = await pasajeroController.namePassenger(nombreCheck);

        let password = pasajero.password;

        let verificar = await bcrypt.compare(passwordCheck,password);

        if(!verificar){
            return new Error("El password y el email no coinciden");
            
        }

        let payload = {
            pasajeroId : pasajero.id,
            createdAt: new Date,
            isAdmin : pasajero.isAdmin
        };

        return jwt.sign(payload,secret);

    }
}

let loginController = new LoginController();
module.exports = loginController;

