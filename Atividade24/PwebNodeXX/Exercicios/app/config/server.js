var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
// para incluir a pasta app
consign({cwd:'app'}).include('routes').then('config/dbConnection.js').into(app);
//consign().include('app/routes').into(app);


module.exports = app;