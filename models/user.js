var crypto = require('crypto');
var async = require('async');
var schema = require('lib/mysqlDb');

var User = schema.define('user', {
    nickname: { type: String, length: 50},
    first_name: { type: String, length: 255},
    last_name: { type: String, length: 255},
    email: { type: String, length: 255 },
    sha1_password: { type: String, length:40 },
    salt: { type: String, length: 32 }
});

User.prototype.encryptPassword = function(password){
    return crypto.createHash('sha1').update(this.salt + password).digest('hex');
};

User.prototype.checkPassword = function(password) {
    return this.encryptPassword(password, this.salt) === this.sha1_password;
};
//
User.prototype.authorize = function(username, password, callback){
    async.waterfall([
        function(callback) {
            return User.findOne({where: {nickname: username}}, callback);
        },
        function(user, callback) {
            if (user) {
                if(user.checkPassword(password)) {
                    console.log(user);
                    callback(null, user);
                } else {
                    callback(403);
                }
            } else {

                return callback(null);

                //var user = new User({username: username, password: password});
                //user.save(function(err) {
                //    if(err) return callback(err);
                //    callback(null, user);
                //})

            }
        }
    ], callback);

};

module.exports = User;
