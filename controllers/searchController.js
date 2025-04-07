const data = require('../db/data');

const searchController = {
    index: function(req, res){
        let result = req.query.search;
        res.render('search-results', {
            result,
            productos: data.productos
        });
    }
    
};

module.exports = searchController;