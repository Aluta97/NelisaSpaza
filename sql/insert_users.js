var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});

var sql = "INSERT INTO users (username, password) VALUES ?";

var values = [

  ['aluta', 7455],
  ['nelisa',1234],
  ['xolani', 1234]

];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
