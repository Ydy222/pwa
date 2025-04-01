const mysql = require('mysql2');

function people_delete(person_id){
    const dbInfo = {
        host: '192.168.0.40',
        user: 'root',
        password : 'rootpassword',
        database : 'mh'
    }

    const connection = mysql.createConnection(dbInfo);
    // DB 연결
    connection.connect();
    const sql ="delete from people where person_id = ?";
    connection.query(sql,[person_id],(err,result)=>{
        if( err ) throw err;
        console.log(`result = ${result}` );
    })

    connection.end();
}

module.exports = people_delete;