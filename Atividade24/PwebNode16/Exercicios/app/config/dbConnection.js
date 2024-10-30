var sql = require ('mssql');

var connSQLServer = function(){
    const sqlConfig = {
        user: 'BD2412029',
        password: 'Jvitor1809$',
        database: 'BD',
        server: 'Apolo',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    } 
    return sql.connect(sqlConfig);
}
module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
}