'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
const service = require('../services');

function createToken(user) {
    const payload = {
        /* Para hacer un API más segura lo normal es que este ID no fue el de mongodb para no poner en peligro la integridad de la base de datos pero usaremos ese para no tener una mayor complejidad*/
        sub: user._id,
        // Van a ser unas determinadas fechas para indicar cuando fue creado el token y en que momento va a expirar 
        /* para ayudarnos con las fechas vamos a instalar moment desde npm */
        iat: moment().unix(),
        exp: moment().add(14,'days').unix() // 14 para caducar
    }
    return jwt.encode(payload, config.SECRET_TOKEN);
}

module.exports = createToken;