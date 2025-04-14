const data = require('../db/data');
const usersController = {
    login: function(req, res){
        return res.render('login');
    },
    profile: function(req, res){
        let productos = data.productos;
        let user = data.usuario;
    
        return res.render('profile', {
            productos: productos,
            user: user
        });
    },
    register: function(req, res){
        return res.render('register');
    }
};

module.exports = usersController;