var User = require('models/user');
var form = require('forms/userEditProfile');

exports.get = function(req, res) {
    User.find(req.params.id, function(err, user){
        if (err) throw err;
        res.render('user', {
            user: user,
            form: form.bind(user)
        });
    });

};

exports.post = function(req, res) {
    form.handle(req, {
        success: function(form) {
            //return res.redirect('/');
            console.log(form.data.id);
            res.render('user', {
                form: form
            });
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
