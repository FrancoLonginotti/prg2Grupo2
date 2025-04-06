const data = require('../db/data');
const profileController = {
    index: function(req, res){
        let productos = data.productos;

        res.render('profile', {
            productos: productos,
            user: data.usuario
        });
    }
}

module.exports = profileController;