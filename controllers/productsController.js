const data = require('../db/data');
const productsController = {
    index: function(req, res){
        let productos = data.productos;
        let id = req.params.detalle;
        
        if (productos[id]){
            let product = productos[id];
            return res.render('product', {
                name: product.name,
                description: product.description,
                image: product.image,
                comments: product.comments
            });
        }
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