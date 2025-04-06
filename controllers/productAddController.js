const productAddController = {
    index: function(req, res){
        res.render('product-add', {
            user: {
                username: '',
                email: ''}
    });
    }
}

module.exports = productAddController;