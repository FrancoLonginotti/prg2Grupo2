const data = require('../database/models');
const db = require('../database/data'); 

const productsController = {
    index: function(req, res){
        let id = req.params.id;
        db.Producto.findByPk(id)
        .then(function(producto){
            res.render("product", {producto: producto})
        })
        
        // let id = req.params.detalle;
        
        // if (productos[id]){
        //     let product = productos[id];
        //     return res.render('product', {
        //         name: product.name,
        //         description: product.description,
        //         image: product.image,
        //         comments: product.comments
        //     });
        // }
    },
    productAdd: function(req, res){
        let productos = data.productos;
        let user = data.usuario;
    
        return res.render('product-add', {
            productos: productos,
            user: user
        });
    }
};


module.exports = productsController;