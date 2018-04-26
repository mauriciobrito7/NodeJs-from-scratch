'use strict';

const services = require('../services');

function isAuth (req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({ message: 'No tienes autorización' });
    }
    // Hacemos que con split toda esa cabecera nos la convierta en un array con tantos elementos como espacios hay.
    const token = req.headers.authorization.split(" ")[1];// Obtenemos la segunda posición que es donde esta el token

    services.decodedToken(token)
    .then(response =>{
        req.user = response;
        next();
    })
    .catch();
}

module.exports = isAuth;