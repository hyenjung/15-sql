"use strict";

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyunjeong',
  passward: 'kara6329',
  database: 'hyunjeong'
});
module.exports = {
  mysql: mysql,
  connection: connection
};