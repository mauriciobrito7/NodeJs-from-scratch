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

/* Despues de nuestros middlewares vamos a poner nuestras peticiones o las escuchas o peticiones que le hagamos a nuestra API REST*/

// Primer parametro: la url que queremos que escuche este método
// Segundo parametro: devuelve un callback 

/* Como se ponen parametros en las rutas solo se colocan dos puntos (:) y el parametro*/
app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola Mundo ${req.params.name}` }); 
});

// Levantamos el servidor
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});
