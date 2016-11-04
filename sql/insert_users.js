var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});

var sql = "INSERT INTO users (username, password, email) VALUES ?";

var values = [

  ['aluta', 7455,'aluta@gmail.com'],
  ['nelisa', 1234,'aluta@gmail.com'],
  ['xolani', 1234,'aluta@gmail.com']

];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
