const data = require('../database/models');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const usersController = {
    login: function(req, res){
        if (req.session.userLogueado) {
            return res.redirect('/users/profile'); 
        }
        return res.render('login');
    },

    processLogin: function (req, res) {
        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(user){
            if(user != undefined){
                let passDb = user.contrasenia;
                let check = bcrypt.compareSync(req.body.password, passDb);
                if(check == true || passDb == req.body.password){
                    req.session.userLogueado = {
                        id: user.id,
                        nombre: user.nombre,
                        email: user.email,
                        fotoPerfil: user.fotoPerfil
                    };
                    
                    if(req.body.recordarme != undefined){
                        res.cookie('usuario', user,{ maxAge: 1000 * 60 * 5 });
                    };
                    res.redirect('/users/profile');
                }else{
                    return res.send('contrasena incorrecta');
                }
            }else{
                return res.send('Email no registrado');
            }
            
        })
    },

    profile: function(req, res){
        let userId = req.session.userLogueado.id;

        db.Usuario.findByPk(userId, {
            include: [
                {
                    association: "productos", 
                    include: [
                        {
                            association: "comentarios" //comentarios de cada producto
                        }
                    ]
                },
                {
                    association: "comentarios" //comentarios del usuario
                }
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.redirect('/users/login');
            }
            res.render("profile", { usuario: usuario });
        })
    },

    profilePorId: function(req, res){
        let userId = req.params.id;
 
 
        db.Usuario.findByPk(userId, {
            include: [
                {
                    association: "productos",
                    include: [
                        {
                            association: "comentarios" //comentarios de cada producto
                        }
                    ]
                },
                {
                    association: "comentarios" //comentarios del usuario
                }
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.send("Usuario no encontrado");
            }
            res.render("profile", { usuario: usuario });
        })
    }, 

    register: function(req, res){
        if (req.session.userLogueado) {
            return res.redirect('/users/profile'); 
        }
        return res.render('register');
    },

    processRegister: function(req, res) {
        let password = req.body.password; 
        if (password.length < 3) {
            return res.render('register', { error: "la contraseña debe tener al menos 3 caracteres." });
        }
        
        let email = req.body.email;

        db.Usuario.findOne({ where: { email: email } })
        .then(function(userInDB){
            if (userInDB) {
                return res.render('register', { error: "El email ya está registrado." });
            }
        })
        
        let passEncriptada = bcrypt.hashSync(password, 10);
       
        db.Usuario.create({
            email: req.body.email,
            contrasenia: passEncriptada,
            dni: req.body.dni,
            fecha: req.body.fechaNacimiento, 
            fotoPerfil: req.body.fotoPerfil,
            nombre: req.body.usuario
        })
        .then(function(user){
             req.session.userLogueado = {
                        id: user.id,
                        nombre: user.nombre,
                        email: user.email,
                        fotoPerfil: user.fotoPerfil
                    };
            return res.redirect('/users/profile');
        })
      
    },
    
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('usuario')
        res.redirect("/")
    }
};
module.exports = usersController;