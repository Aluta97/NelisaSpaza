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
            var data = files[i].split(';');
            purchases.push(data)
     }
    //    console.log(purchases);

        //creating the prod_id map
           products.forEach(function(product){
             //console.log(product);
             map[product.description] = product.id;
           })
              // console.log(map);

              var values = [];

        for(var i = 0; i < purchases.length; i++){
            for(var key in map){
              var name = purchases[i][2];
        //console.log(name);
         var prod_id = map[name];
        //    console.log(prodID);
              var purchase_date = purchases[i][1] + 2016;
              //console.log(date);
              var quantity = purchases[i][3];
              //console.log(quantity);
              var cost = purchases[i][4];
            //  console.log(cost);
  }
          values.push([quantity, cost, prod_id, purchase_date])
  }

      //console.log(values);

  var sql = 'insert into purcahses(quantity, cost, prod_id, purchase_date) VALUES ?';
  conn.query(sql,[values],function(err){
    if(err) throw err
    conn.end();

  })

  

 });
