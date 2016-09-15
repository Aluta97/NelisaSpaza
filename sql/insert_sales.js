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
      // console.log(data);
         prod.push(data)
  }

  //creating the prod_id map
     products.forEach(function(description){
      // console.log(product);
       map[description.products] = products.id;
     })
      console.log(map);

//    var sales = [];

  // for(var i = 0; i < prod.length; i++){
  //   prod[i] = prod[i]
  //
  //     var date = prod[i][1];
  //     var no_sold = prod[i][3];
  //     var price = prod[i][4];
  //
  //   }

    // var sql = 'insert into sales(`id`, `date`, `product_id`, `no_sold`, `price`) VALUES ?';
    // conn.query(sql,[values],function(err){
    //   if(err) throw err
    //   conn.end();
    // })



});
