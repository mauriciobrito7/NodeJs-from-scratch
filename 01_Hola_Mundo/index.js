'use strict';

// Requerimos el modulo de express
/* Importamos un modulo con la palabra reservada require */
const express = require('express');
const app = express();
// Levantamos el servidor
app.listen(3000, () =>{
console.log('Hola mundo, corriendo en puerto 3000');
});
