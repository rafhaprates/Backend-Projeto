exports.render = function(req, res) {
    res.render('index', {
    	title: 'Teste backend midia Simples',
    	user: req.user ? req.user.username : '',
    	username: req.user ? req.user.name : '',
    	userid:req.user ? req.user._id : ''
    });
};
