var isGuest = require('filters/guest');
var isUser = require('filters/user');
var isAdmin = require('filters/auth');

module.exports = function(app) {
    // public block
    app.get('/', isGuest, require('actions/index.js').get);
    app.get('/login', isGuest, require('actions/login').get);
    app.post('/login', isGuest, require('actions/login').post);
    app.get('/logout', require('actions/logout').get);
    // user block

    // admin block
    app.get('/admin', isAdmin, require('actions/admin/index').get);
    app.get('/admin/user', isAdmin, require('actions/admin/index').get);
    app.get('/admin/user/:id', isAdmin, require('actions/admin/user.js').get);
    app.post('/admin/user/:id', isAdmin, require('actions/admin/user.js').post);

};
