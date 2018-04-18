"use strict";

// Requerimos el modulo de express
/* Importamos un modulo con la palabra reservada require */
const express = require('express');
const app = express();
// mongoose tiene un método llamado connect que le pasamos un string donde se encuentra nuestra base de datos
const mongoose = require('mongoose');
// Modelo
const Product = require('./models/product');
const port = process.env.PORT || 3000;
// --Middlewares--

// Recibir datos en formato json()
app.use(express.json());
// Recibir datos a traves de la url
app.use(express.urlencoded({ extended: false }));

/* Despues de nuestros middlewares vamos a poner nuestras peticiones o las escuchas o peticiones que le hagamos a nuestra API REST*/

/* Imaginemos que haremos un e-commerce */
app.get('/api/product', (req,res) => {
  // Pasamos un objeto vacio que significa que busque todo y la función de callback
  Product.find({},( err, products ) =>{
    if (err) return res.status(500).send( {message: `Error al realizar la petición ${err}`} );
    if( !products ) return res.status(404).send({ message: 'No existen productos' });
    res.status(200).send({ products });
  });
});

app.get('/api/product/:productId',(req,res) => {
  let productId = req.params.productId;

  // Función de mongoose
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send( {message: `Error al realizar la petición ${err}`} );
    // Si el producto no existe
    if ( !product ) return res.status(404).send({ message:`El producto no existe` });
    
    res.status(200).send({ product });
  });
});
app.post('/api/product/',(req,res)=> {
  console.log('POST/api/product');
  console.log(req.body);

  let product = new Product();
  product.name = req.body.name;
  product.pictue = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  // Como es un objeto de mongoose ya tiene funciones de mongodb y podemos decirle que se guarde
  /*Recibe una función de callback para indicar que ya se ha salvado
    Tiene como parametros: error y el producto guardado
    Cuando se almacene por defecto MongoDB le va añadir un ID unico de manera que podemos acceder para borrar, actualizar y obtener
  */
  product.save(( err, productStored ) => {
    if( err ) res.status(500).send({ message: `Error al salvar en la base de datos ${err}` });

    res.status(200).send({product: productStored});
  });
});

app.put('/api/product/:productId',(req,res)=> {
  let productId = req.params.productId;
  let update = req.body;
  // Función de mongoose
  /*recibe el id del objeto a actualizar y los parametros actualizar que estan en el body de la petición*/
  Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
    if (err) return res.status(500).send( {message: `Error al actualizar el producto ${err}`} );
    // Si el producto no existe
    if ( !productUpdated ) return res.status(404).send({ message:`El producto no existe` });
    res.status(200).send({ product: productUpdated });
  });
});

app.delete('/api/product/:productId', (req,res)=> {
  let productId = req.params.productId;
    // Función de mongoose
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send( {message: `Error al realizar la petición ${err}`} );
    // Si el producto no existe
    if ( !product ) return res.status(404).send({ message:`El producto no existe` });
    product.remove(err =>{
      if(err) res.status(500).send({ message: `Error al borrar producto: ${err}` });
    });
  });
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


