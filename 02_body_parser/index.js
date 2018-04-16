"use strict";

// Requerimos el modulo de express
/* Importamos un modulo con la palabra reservada require */
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// --Middlewares--

// Recibir datos en formato json()
app.use(express.json());
// Recibir datos a traves de la url
app.use(express.urlencoded({ extended: false }));

// Levantamos el servidor
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});
