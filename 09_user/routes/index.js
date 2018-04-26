'use strict';

const express = require('express');
/* Funciones para los productos */
const productCtrl = require('../controllers/product');
const auth = require('../middlewares/auth');
const api = express.Router();

/* Imaginemos que haremos un e-commerce 
Rutas de los productos con los controladores
*/
api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product/', productCtrl.saveProduct);
api.put('/product/:productId', productCtrl.updateProduct);
api.delete('/product/:productId', productCtrl.deleteProduct);
api.get('/private', auth, (req, res) =>{
    res.status(200).send({ message: 'Tienes acceso' });
});
module.exports = api;