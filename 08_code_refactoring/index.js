'use strict'
// mongoose tiene un método llamado connect que le pasamos un string donde se encuentra nuestra base de datos
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

/* Nos interesa tener primero levantada nuestra conexión con la base de datos*/
mongoose.connect(config.db,(err, res)=> {
  if ( err ) {
    return console.log(`Error al conectarse a la base de datos ${err}`);
  }
  console.log('Conexión a la base de datos establecida');
  /* Despues que hacemos la conexión con la base de datos levantamos nuestra API*/
  // Levantamos el servidor
  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`);
  });
});


