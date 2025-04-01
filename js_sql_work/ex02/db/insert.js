const mysql = require('mysql2');

function people_insert(name,age) {
    const dbInfo = {
        host: '192.168.0.40',
        user: 'root',
        password: 'rootpassword',
        database: 'mh'
    }

    const connection = mysql.createConnection(dbInfo);

    // DB 연결 시작
    connection.connect();

    const sql = 'insert into people (person_name,age) values (?,?)';
    const values = [name, age];

    connection.query(sql, values, (error, result) => {
        if (error) throw error;
        console.log(result);
    })

    // DB 연결 끊기
    connection.end();
}

module.exports = { people_insert };