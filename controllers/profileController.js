const data = require('../db/data');
const profileController = {
    index: function(req, res){
        let productos = data.productos;
        let user = data.usuario;
    
        res.render('profile', {
            productos: productos,
            user: user
        });
    }
}

module.exports = profileController;