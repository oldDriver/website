var checkAuth = require('filters/auth');
module.exports = function(app) {
    // public block
    app.get('/', require('actions/index.js').get);
    app.get('/user/:id', require('actions/user.js').get);
    app.post('/user/:id', require('actions/user.js').post);
    app.get('/login', require('actions/login').get);
    app.post('/login', require('actions/login').post);
    app.get('/logout', require('actions/logout').get);
    // admin block
    app.get('/admin', checkAuth, require('actions/admin/index').get);
};
