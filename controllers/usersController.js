const data = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../db/models'); 

const usersController = {
    login: function(req, res){
        return res.render('login');
    },
    processLogin: function (req, res) {
        let userInDB = db.Usuario.findOne({
            where: { email: req.body.email }
        });
        if (!userInDB) {
            return res.render('login', {
                error: "El email no está registrado."
            });
        }
        let passCheck = bcrypt.compareSync(req.body.password, userInDB.password);
        if (!passCheck) {
            return res.render('login', {
                error: "La contraseña es incorrecta."
            });
        }
        req.session.userLogueado = userInDB;
        if (req.body.remember) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 });
        }
        return res.redirect('/users/profile');
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
    },
    processRegister: function(req, res) {
        if (password.length < 3) {
            return res.render('register', { error: "la contraseña debe tener al menos 3 caracteres." });
        }
        let userInDB = db.Usuario.findOne({ where: { email: req.body.email } });
        if (userInDB) {
            return res.render('register', { error: "El email ya está registrado." });
        }
        const passEncriptada = bcrypt.hashSync(req.body.password, 10);
        db.Usuario.create({
            usuario: req.body.Usuario,
            email: req.body.email,
            password: passEncriptada,
            fechaNacimiento: req.body.Date,
        })
    },
    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('usuario')
        res.redirect("/")
    }
};

module.exports = usersController;