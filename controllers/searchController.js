const searchController = {
    index: function(req, res){
        let result = req.query.search;
        res.render('search-results', {result});
    }
}

module.exports = searchController;