const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyunjeong',
    passward: 'kara6329',
    database: 'hyunjeong'
});

module.exports = {mysql, connection};