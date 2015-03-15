git init
git clone git@github.com:oldDriver/website.git
npm i

And one little trick:
node_modules/bson/ext/index.js

change bson = require('../build/Release/bson');
to bson = require('bson');