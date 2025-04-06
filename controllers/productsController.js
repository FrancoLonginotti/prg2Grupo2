const data = require('../db/data');
const productsController = {
    index: function(req, res){
        let productos = data.productos;
        let index = req.params.index;
        
        if (productos[index]){
            let product = productos[index];
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