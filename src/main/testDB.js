var mysql = require('mysql');
var config = {
    host:"localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database:"testDB"
};
console.log(config);
function getUser() {
    var con = new  mysql.createConnection(config);
     $query = 'SELECT * FROM `user` ';
    con.query($query,function (err,rows,) {
        if(err){
            throw err;
        }
        let data = JSON.parse(JSON.stringify(rows));
        console.log("Query succesfully executed", rows,data);
        return data;

    });


    }
console.log(getUser(),"fff");
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port:"3306",
//     database:"testDB"
// });

// connection.connect(function(err) {
//     // in case of error
//     if(err){
//         console.log(err.code);
//         console.log(err.fatal);
//     }
// });

// // Perform a query
// $query = 'SELECT * FROM `user` LIMIT 10';
//
// connection.query($query, function(err, rows, fields) {
//     if(err){
//         console.log("An error ocurred performing the query.");
//         console.log(err);
//         return;
//     }
//
//     console.log("Query succesfully executed", rows);
// });
//
// // Close the connection
// connection.end(function(){
//     // The connection has been closed
// });
