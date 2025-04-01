const profileController = {
    index: function(req, res){
        return res.render('profile', {
                user: req.session.user
        });
    }
}

module.exports = profileController;