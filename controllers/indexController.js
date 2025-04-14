const data = require('../db/data');
const controller = {
    index: function(req, res) {
        res.render('index', {
            productos: data.productos
        });
    },
    search: function(req, res){
        let productos = data.productos;
        let result = req.query.search;
        let productosEncontrados = [];
 
 
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            for (let j = 0; j < producto.alias.length; j++) {
                if(producto.alias[j] === result){
                    producto.index = i;
                    productosEncontrados.push(producto);
                }
            }
        }
 
        return res.render('search-results', {
            result: result,
            productos: productosEncontrados
        });
    }
};

module.exports = controller;