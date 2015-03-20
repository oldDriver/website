var User = require('models/user');

module.exports = function(req, res, next) {
    if (!req.session.user) {
        return next();
    } else {
        return res.redirect('/admin');
        return next();
    }
};
