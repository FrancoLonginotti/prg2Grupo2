const db = require('../database/models'); 

const productsController = {
    index: function(req, res){
        let id = req.params.detalle;
        db.Producto.findByPk(id, {
            include: [
                {
                    association: "comentarios", 
                    include: [
                        {
                            association: "usuario" 
                        }
                    ]
                },
                {
                    association: "usuario"
                }
            ]
        })
        .then(function(producto){
            return res.render("product", {producto: producto});
        })

        .catch(function(error){
            console.log(error)
        })

       
    },
    productAdd: function(req, res){
        return res.render('product-add')
    },

    nuevoProd: function(req, res){
        db.Producto.create({
            foto: req.body.imagen,
            nombre: req.body.nombreProducto, 
            descripcion: req.body.descripcionProducto,
            id_usuario: req.session.userLogueado.id
        })
        .then(function(producto){
            return res.redirect('/users/profile'); 
        })
    }
};


module.exports = productsController;