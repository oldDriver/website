///var User = require('models/user');
exports.get = function(req, res) {
    res.render('public/index');
    //User.all({order: "nickname", limit: 10}, function(err, results){
    //    if (err) throw err;
    //    //console.log(results);
    //    res.render('index', {
    //        users: results
    //    });
    //});

};
