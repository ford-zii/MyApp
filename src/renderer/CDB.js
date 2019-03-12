var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port:"3306",
    database:"testDB"
});

connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query


// Close the connection
connection.end(function(){
    // The connection has been closed
});
