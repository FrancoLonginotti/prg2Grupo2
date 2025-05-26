const data = require('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res) {
        db.Producto.findAll({
            include: [
                {association: "comentarios"}
            ]
        })
            .then(function(productos){
                res.render("index", {productos: productos})
            })
       
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
    },
    search2: function(req, res){
        let search = req.query.search;
        db.Producto.findAll({
            where: [
                {nombre: {[op.like]: "%" + search + "%"}}
            ]
        })
        .then(function(productos){
            res.render("search-results", {
                productos: productos,
                result: search,
            });
    })
    }
};

module.exports = controller;