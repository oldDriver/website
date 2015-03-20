var User = require('models/user');

exports.get = function(req, res) {
    User.all({order: "nickname", limit: 10}, function(err, results){
        if (err) throw err;
        //console.log(results);
        res.render('admin/index', {
            users: results
        });
    });
};
