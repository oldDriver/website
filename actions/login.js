var User = require('models/user');
var form = require('forms/userLogin');

exports.get = function(req, res) {
    res.render('user', {
        form: form
    });
};

exports.post = function(req, res) {

    form.handle(req, {
        success: function(form) {
            req.session.visits = req.session.visits + 1 ||1;
            User.findOne({where: {nickname: form.data.nickname}}, function(err, user){
                if (user) {
                    user.authorize(form.data.nickname, form.data.password, function (err, user) {
                        if (err) {
                            console.log(err);
                            //throw err;
                        }
                        req.user = req.session.user = user.id;
                        res.redirect('/admin');

                    });
                } else {
                    res.redirect('/login');
                    return true;
                }
            });
            //req.session.user = user;
            req.session.login = req.session.login + 1 ||1;
            //res.redirect('/admin');
        },
        error: function(form) {
            res.render('user', {
                form: form
            });
        },
        other: function(form) {
            res.render('user', {
                form: form
            });
        }
    });
};
