'use strict';
// Modelo
const Product = require('./../models/product');
/* Funciones que manejan y se comunican con las bases de datos y node*/

function getProduct(req, res) {
    let productId = req.params.productId;

    // Función de mongoose
    Product.findById(productId, (err, product) => {
        if (err) return res
            .status(500)
            .send({ message: `Error al realizar la petición ${err}` });
        // Si el producto no existe
        if (!product) return res
            .status(404)
            .send({ message: `El producto no existe` });

        res.status(200).send({ product });
    });
}

function getProducts(req, res) {
    // Pasamos un objeto vacio que significa que busque todo y la función de callback
    Product.find({},( err, products ) =>{
        if (err) return res.status(500).send( {message: `Error al realizar la petición ${err}`} );
        if( !products ) return res.status(404).send({ message: 'No existen productos' });
        res.status(200).send({ products });
    });
}

function updateProduct(req, res) {
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
}

function saveProduct() {
    console.log("POST/api/product");
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
    product.save((err, productStored) => {
      if (err) res
          .status(500)
          .send({ message: `Error al salvar en la base de datos ${err}` });

      res.status(200).send({ product: productStored });
    });
}

function deleteProduct(req, res) {
    let productId = req.params.productId;
    // Función de mongoose
    Product.findById(productId, (err, product) => {
        if (err) return res
            .status(500)
            .send({ message: `Error al realizar la petición ${err}` });
        // Si el producto no existe
        if (!product) return res
            .status(404)
            .send({ message: `El producto no existe` });
        product.remove(err => {
        if (err) res
            .status(500)
            .send({ message: `Error al borrar producto: ${err}` });
        });
    });
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    saveProduct,
    deleteProduct,
}