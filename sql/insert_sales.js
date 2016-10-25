var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
  });

  //getting the products from the other file
 conn.query('SELECT * FROM products', function(err, products){
   if(err) throw err;
//console.log(products);

var prod = [];
var map = {};

var files = fs.readFileSync('../files/week2.csv', 'utf8')
            .split('\n');
  for(var i = 0; i < files.length -1; i++){
         var data = files[i].split(',');
         prod.push(data)
  }

  //creating the prod_id map
     products.forEach(function(product){
       map[product.description] = product.id;
     })
      //console.log(map);

    var values = [];
    var prodMap = {};


  for(var i = 0; i < prod.length; i++){
    for(var key in map){
      var name = prod[i][2];
//console.log(name);
 var prodID = map[name];
  var selling_date = prod[i][1];
    var quantity = prod[i][3];
      var selling_prices = prod[i][4];


}
    values.push([selling_date, quantity, selling_prices, prodID])
}
       //console.log(values);

    var sql = 'insert into sales(selling_date, quantity, selling_prices, prod_id) VALUES ?';
    conn.query(sql,[values],function(err){
      if(err) throw err
      conn.end();
    })

});
