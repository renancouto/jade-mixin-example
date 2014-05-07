'use strict';

/**
 * Module dependencies
 */
var path    = require('path');
var express = require('express');
var app     = express();

/**
 * Express Configuration
 */
app.set('port', 3000);
app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index');
});

/**
 * Server Start
 */
app.listen(app.get('port'), function () { console.log('Server started at port ' + app.get('port')); });