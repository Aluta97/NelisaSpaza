var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'nelisa'
    // your connection details here
});

 //getting the categories from the other file
conn.query('SELECT * FROM categories', function(err, categories){
  if(err) throw err;
//  console.log(categories);

  var productCats = {
  'Milk 1l': 'Dairy',
  'Imasi': 'Dairy',
  'Bread': 'Bakery',
  'Chakalaka Can': 'Canned Food',
  'Gold Dish Vegetable Curry Can': 'Canned Food',
  'Fanta 500ml': 'Soft Drinks',
  'Coke 500ml': 'Soft Drinks',
  'Cream Soda 500ml': 'Soft Drinks',
  'Iwisa Pap 5kg': 'Starch',
  'Top Class Soy Mince': 'Starch',
  'Shampoo 1 litre': 'Toiletries',
  'Soap Bar': 'Toiletries',
  'Bananas - loose': 'Fruit',
  'Apples - loose': 'Fruit',
  'Mixed Sweets 5s': 'Sweets',
  'Heart Chocolates': 'Sweets',
  'Valentine Cards': 'Extras',
  'Rose (plastic)': 'Extras',

}

 var prod = [];
 var map = {};

//reading the week2 csv
 var files = fs.readFileSync('../files/week2.csv', 'utf8').split('\n');
   for(var i = 0; i < files.length -1; i++){
          var data = files[i].split(',');
        //  console.log(data);
            prod.push(data[2])
   }

//creating the cat_id map
   categories.forEach(function(category){
     //console.log(category);
     map[category.category] = category.id;
   })
    // console.log(map);
   var values = [];
   var newMap = {};

   for(var i = 0; i < prod.length; i++){
     var description = prod[i];
       var category = productCats[description];
        var category_id = map[category];

// create an if satement to make sure you dont sure you dont repeat the same products
      if(newMap[description] === undefined){
          newMap[description] = 0;
        }
          newMap[description] = category_id;
   }

   for(var key in newMap){
        var results = [key, newMap[key]];
          values.push(results)
   }
    //   console.log(values);
   var sql = 'insert into products(description, category_id) VALUES ?';
   conn.query(sql,[values],function(err){
     if(err) throw err
     conn.end();
   })
});
