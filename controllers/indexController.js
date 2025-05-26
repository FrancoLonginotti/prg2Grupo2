const data = require('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res) {
        db.Producto.findAll({
            include: [
                {association: "comentarios"},
                {association: "usuario"}
            ]
        })
            .then(function(productos){
                res.render("index", {productos: productos})
            })
       
    },
    
    search2: function(req, res){
        let search = req.query.search;
        db.Producto.findAll({
            where: [
                {nombre: {[op.like]: "%" + search + "%"}}
            ],
            include: [
                {association: "comentarios"},
                {association: "usuario"}
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