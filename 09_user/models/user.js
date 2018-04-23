'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* Vamos a usar una librería para encriptar contraseñas para guardarla en un formato modificado */
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema({ 
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
 });

 /* Vamos a utilizar unas funciones que nos proporcionas mongoose que se pueden ejecutar antes o despues que el modelo haya sido almacenado en la base de datos en este caso vamos a utilizarlo antes para encriptar la contraseña que introduzca el usuario*/

 // Le decimos antes de que se guarde se ejecute la siguiente función
UserSchema.pre('save', (next) => {
    let user = this;
    // Si el usuario no ha modificado su contraseña
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt)=>{
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.gravatar = () => {
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`;

    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?=s200&d=retro`;
}

module.exports = mongoose.model('User', UserSchema);