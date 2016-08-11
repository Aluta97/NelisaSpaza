var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});

var sql = "INSERT INTO categories (category) VALUES ?";

//create a list of lists
var values = [
     ['Dairy'],
     ['Bakery'],
     ['Canned Food'],
     ['Soft Drinks'],
     ['Starch'],
     ['Toiletries'],
     ['Fruit'],
     ['Sweets'],
     ['Extras']
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
