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

var purchases = [];
var map = {};

   var files = fs.readFileSync('../files/purchases.csv', 'utf8')
               .split('\n');
     for(var i = 0; i < files.length -1; i++){
            var data = files[i].split(',');
            purchases.push(data)
     }
        //console.log(purchases);

        //creating the prod_id map
           products.forEach(function(product){
             //console.log(product);
             map[product.description] = product.id;
           })
              //  console.log(map);


        for(var i = 0; i < purchases.length; i++){
           purchases[i] = purchases[i];

            var shop = purchases[i][0];
              console.log(shop);
        }




 });
