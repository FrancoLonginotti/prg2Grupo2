const data = require('../db/data');
const productsController = {
    index: function(req, res){
        let productos = data.productos;
        let id = req.params.detalle;
        
        if (productos[id]){
            let product = productos[id];
            res.render('product', {
                name: product.name,
                description: product.description,
                image: product.image,
                comments: product.comments
            });
        }
    }
}


module.exports = productsController;