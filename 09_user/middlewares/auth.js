'use strict';

const jwt = require('jwt');
const moment = require('moment');
const config = require('../config');

function isAuth (req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({ message: 'No tienes autorización' });
    }
    // Hacemos que con split toda esa cabecera nos la convierta en un array con tantos elementos como espacios hay.
    const token = req.headers.authorization.split(" ")[1];// Obtenemos la segunda posición que es donde esta el token
    const payload = jwt.decode(token, config.SECRET_TOKEN);

    if (payload.exp <= moment().unix()){
        return res.status(401).send({ message: 'El token ha expirado' })
    }
    req.user = payload.sub
    next();
}

module.exports = isAuth;