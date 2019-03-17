const mysql = require('mysql');
const config = {
    host:"localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database:"testDB"
};
const con = new  mysql.createConnection(config);
