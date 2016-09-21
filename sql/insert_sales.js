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

var files = fs.readFileSync('../files/week1.csv', 'utf8')
            .split('\n');
  for(var i = 0; i < files.length -1; i++){
         var data = files[i].split(',');
         prod.push(data)
  }

  //creating the prod_id map
     products.forEach(function(product){
       map[product.description] = product.id;
     })
    //  console.log(map);

    var values = [];

  for(var i = 0; i < prod.length; i++){
    for(key in map){

 var selling_date = prod[i][1] + 2016;
  //console.log(selling_date);
    var quantity = prod[i][3];
  //  console.log(quantity);
      var selling_prices = prod[i][4];
        var prod_id = map[key];
        //  console.log(prod_id);
     }

     values.push([quantity, selling_prices, selling_date, prod_id])
     console.log(values);

}
    // var sql = 'insert into sales(quantity, selling_prices, selling_date, prod_id) VALUES ?';
    // conn.query(sql,[values],function(err){
    //   if(err) throw err
    //   conn.end();
    // })

});
