var Schema = require('jugglingdb').Schema;
var config = require('yaml-config');
var settings = config.readConfig('config/database.yml');

var schema = new Schema('mysql',  {
    host: settings.host,
    username: settings.username,
    password: settings.password,
    database: settings.database
});

module.exports = schema;