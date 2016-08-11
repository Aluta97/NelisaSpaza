var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});


conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
