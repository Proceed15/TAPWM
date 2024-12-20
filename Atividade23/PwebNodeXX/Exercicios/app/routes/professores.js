module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
        const sql = require ('mssql');
  
        const sqlConfig = {
            user: 'BD2412016',
            password: 'Apollo@333',
            database: 'BD', //Na FATEC, utilizar o database BD ou LP8
            server: 'Apolo',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
            options:{
                encrypt: false,
                trustServerCertificate: true
            }
        }
   
       async function getProfessores() {
           try {
               const pool = await sql.connect(sqlConfig);
           
                const results = await pool.request().query('SELECT * from PROFESSORES')
           
                //res.send(results.recordsets)
                res.render('informacao/professores',{profs : results.recordset});
     
            } catch (err) {
                console.log(err)
           }
            //res.render('informacao/professores');
        }
       getProfessores();
    });
 }