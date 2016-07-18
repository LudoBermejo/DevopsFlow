'use strict';

const express = require('express');
const hbs = require('express-hbs');

let app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('home', {

    });
});

app.listen(8080);

module.exports.getApp = app;
