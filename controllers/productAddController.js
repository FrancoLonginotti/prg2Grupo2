const data = require('../db/data')
const productAddController = {
    index: function(req, res){
        let productos = data.productos;
        let user = data.usuario;
    
        res.render('product-add', {
            productos: productos,
            user: user
        });
    }
}

module.exports = productAddController;