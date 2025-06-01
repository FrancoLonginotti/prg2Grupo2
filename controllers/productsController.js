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
            let comentarios = producto.comentarios;

            for (let i = 0; i < comentarios.length - 1; i++) {
                for (let k = 0; k < comentarios.length - 1 - i; k++) {
                    if (comentarios[k].createdAt < comentarios[k + 1].createdAt) {
                        let masViejo = comentarios[k];
                        comentarios[k] = comentarios[k + 1]; 
                        comentarios[k + 1] = masViejo;
                }
            }
        }
        
        producto.comentarios = comentarios;

        return res.render("product", { producto: producto });
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
    },
    nuevoComent: function(req, res){
        if(req.session.userLogueado != undefined ){
        db.Comentario.create({
            texto: req.body.comenta,
            id_producto: req.params.id,
            id_usuario: req.session.userLogueado.id
        })
        .then(function(comentario){
            return res.redirect('/products/detalle/' + req.params.id);
        })
        } else {
            return res.redirect('/users/login')
    }
    }
};

module.exports = productsController;