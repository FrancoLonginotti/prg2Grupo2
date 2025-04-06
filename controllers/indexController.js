const data = require('../db/data');
const controller = {
    index: function(req, res) {
        res.render('index', {
            productos: data.productos
        });
    }
};

module.exports = controller;