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
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}`});

        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) =>{
        if(err) return res.status(500).send({ message: `${err}`});
        // Si no existe
        if(!user) return res.status(404).send({ message: 'No existe el usuario' });

        req.user = user;
        res.status(202).send({ message:'Te has logueado correctamente',
        token: service.createToken(user)
        });
    });
}

module.exports = {
    signUp,
    signIn
};