<html>
    <head>
    </head>
    <body>
        git init<br>
        git clone git@github.com:oldDriver/website.git<br>
        npm i
        <br>
        And one little trick:<br>
        node_modules/bson/ext/index.js<br>
        <br>
        change bson = require('../build/Release/bson');<br>
        to bson = require('bson');
    </body>
</html>