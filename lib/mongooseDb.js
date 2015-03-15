var mongoose = require('mongoose');
var config = require('yaml-config');
var settings = config.readConfig('config/mongoose.yml');
mongoose.connect(settings.host, settings.options);
module.exports = mongoose;
