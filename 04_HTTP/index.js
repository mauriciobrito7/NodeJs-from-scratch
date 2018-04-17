"use strict";

// Requerimos el modulo de express
/* Importamos un modulo con la palabra reservada require */
const express = require('express');
const app = express();
// mongoose tiene un método llamado connect que le pasamos un string donde se encuentra nuestra base de datos
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
// --Middlewares--

// Recibir datos en formato json()
app.use(express.json());
// Recibir datos a traves de la url
app.use(express.urlencoded({ extended: false }));

/* Despues de nuestros middlewares vamos a poner nuestras peticiones o las escuchas o peticiones que le hagamos a nuestra API REST*/

/* Imaginemos que haremos un e-commerce */
app.get('/api/product', (req,res) => {
  res.send(200,{products: []});
});

app.get('/api/product/:productId',(req,res) => {

});
app.post('/api/product/',(req,res)=> {
  console.log(req.body);
  res.status(200).send({message: 'El producto se ha recibido'});
});

app.put('/api/product/:productId',(req,res)=> {

});

app.delete('/api/product/:productId', (req,res)=> {

});

/* Nos interesa tener primero levantada nuestra conexión con la base de datos*/
mongoose.connect('mongodb://localhost:27017/shop',(err, res)=> {
  if ( err ) {
    return console.log(`Error al conectarse a la base de datos ${err}`);
  }
  console.log('Conexión a la base de datos establecida');
  /* Despues que hacemos la conexión con la base de datos levantamos nuestra API*/
  // Levantamos el servidor
  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  });
});


