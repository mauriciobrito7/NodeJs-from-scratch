'use strict';

const express = require('express');
/* Funciones para los productos */
const productCtrl = require('../controllers/product');
const api = express.Router();

/* Imaginemos que haremos un e-commerce 
Rutas de los productos con los controladores
*/
api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product/', productCtrl.saveProduct);
api.put('/product/:productId', productCtrl.updateProduct);
api.delete('/product/:productId', productCtrl.deleteProduct);

module.exports = api;