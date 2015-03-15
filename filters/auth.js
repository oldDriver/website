var User = require('models/user');

module.exports = function(req, res, next){
    var user = req.session.user;
    if (!user) {
        req.user = res.locals.user = null;
        return res.sendStatus(403);
        return next();
    }
    User.find(req.session.user, function(err, user){
        console.log(user);
        if (err) return next(err);
        if (user) {
            req.user = res.locals.user = user;
            next();
        } else {
            res.send(403);
            return next();
        }
    });
};

