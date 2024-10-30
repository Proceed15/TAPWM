//var sql = require ('mssql');
 
var connSQLServer = function(){
   const sqlConfig = {
        user: 'BD2412016',
        password: 'Apollo@333',
        database:'BD',
        server: 'APOLO',
        options:{
          encrypt: false,
          trustServerCertificate: true
        }
    }
  }
    //return sql.connect(sqlConfig);
    module.exports = function(){
      console.log('O autoload carregou o módulo de conexão com o banco de dados');
      return connSQLServer;
    }
