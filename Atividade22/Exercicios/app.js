var app = require('./app/config/server'); //Carregando Módulo do Servidor
var texto = require('./modulo1');
//var app=express(); //executando o express
//var express = require('express');
//app.set('view engine','ejs');
//app.set('views', './views'); // specifica o diretório views

app.get('/', function(req,res){
    res.render("home/index");
    //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
app.get('/admin/adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");
})
app.get('/informacao/historia', function(req,res){
    res.render("informacao/historia");
});
app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos");
});
app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores");
});
app.listen(3000,function(){
    //console.log(texto);
    //console.log("Servidor com Express foi Carregado");
    console.log("Servidor Iniciado");
});