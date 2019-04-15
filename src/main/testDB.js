var mysql = require('mysql');
var config = {
    host:"127.0.0.1",
    user: "root",
    password: "12345678",
    port: "3306",
    database:"store"
};
console.log(config);
function getUser() {
    var con = new  mysql.createConnection(config);
    var theUser = [];

     $query = 'SELECT * FROM `user` ';
     con.query($query,function (err,rows,) {
        if(err){
            throw err;
        }
        let data = JSON.parse(JSON.stringify(rows));

        // data.forEach(function (el) {
        //     console.log(el);
        //     // theUser.insert(el)
        // });
        console.log("Query succesfully executed", rows,data);
         console.log(theUser);
        return theUser.push(data);

    });
    console.log(theUser);
    return theUser;

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
