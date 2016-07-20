'use strict';

var express = require('express');
var hbs = require('express-hbs');

var app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('home', {

    });
});

app.listen(9000);

module.exports.getApp = app;
