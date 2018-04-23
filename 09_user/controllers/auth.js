/* Este controlador se va a encargar del registro y autenticación de usuarios en nuestro API REST */
'use strict';
const mongoose = require('mongoose');
const User = require('../models/user');
/* Como son controladores y reciben peticiones http reciben req y res */
function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName
    });
    user.save((err) =>{
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}`})

        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn(req, res) {

}

module.exports = {
    signUp,
    signIn
};