var fs = require('fs');
var handlebars = require('handlebars');
var products = require('./products');

// get the data
var inputSales = products.salesList('./files/week1.csv')
var weeklySales = products.getWeeklySales(inputSales);
var getMostPopularProduct = products.getMostPopularProduct(weeklySales);
var getLeastPopularProduct = products.getLeastPopularProduct(weeklySales);
console.log(getMostPopularProduct);
console.log(getLeastPopularProduct);
//introducing my handlebar template
var source = fs.readFileSync('./index.handlebars', 'utf8');
//create the template
var template = handlebars.compile(source);
//combine the source and the template
var results = template({list:[getLeastPopularProduct, getMostPopularProduct]});
//write your js file in the HTML.
fs.writeFileSync('products.html', results);
