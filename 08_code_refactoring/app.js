'use strict';

// Requerimos el modulo de express
/* Importamos un modulo con la palabra reservada require */
const express = require('express');
const app = express();
const api = require('./routes/index')
// --Middlewares--

// Recibir datos en formato json()
app.use(express.json());
// Recibir datos a traves de la url
app.use(express.urlencoded({ extended: false }));
/* Decimos que la ruta api use el modulo api */
app.use('/api',api);

module.exports = app;