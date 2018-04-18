'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description: String
});
/* Para exportar este modelo usamos el método model de mongoose
    Indicamos un nombre
    Y el esquema que estamos utilizando
*/
module.exports = mongoose.model('Product', ProductSchema);