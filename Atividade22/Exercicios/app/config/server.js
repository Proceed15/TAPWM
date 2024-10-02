var express = require('express');

var app=express(); //Executando o Express

app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;