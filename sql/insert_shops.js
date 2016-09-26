var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});

var sql = "INSERT INTO shops (shop) VALUES ?";

//create a list of lists
var values = [
     ['Makro'],
     ['Epping Market'],
     ['HomeMade'],
     ['Joe Spaza Shop'],
     ['ChinaTown'],
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
