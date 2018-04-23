'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* Vamos a usar una librería para encriptar contraseñas para guardarla en un formato modificado */
const bcrypt = require('bcrypt-nodejs');
