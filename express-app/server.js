var express = require('express');
var app = express();

var fs = require('fs');
var handlebars = require('handlebars');
var products = require('../products');

var categories = require('../files/categories.json')
var sellingPrices = require('../files/sales.json')
//get the data
//pass in tthe procees argument so you wont have to repeat yourself
var week = process.argv[2];

var inputSales = products.getSalesList('./files/'+ week +'.csv');
var weeklySales = products.getWeeklySales(inputSales);
var mostPopularProduct = products.getMostPopularProduct(weeklySales);
var leastPopularProduct = products.getLeastPopularProduct(weeklySales);

var inputCategories = products.getCategories('./files/categories.csv')
var catSales = products.getCatSales(inputCategories, weeklySales);
var mostPopularCategory = products.getMostPopularCategory(catSales);
var leastPopularCategory = products.getLeastPopularCategory(catSales);

var purchases = products.getPurchases('./files/purchases.csv');
var weeklyPurchases = products.getWeeklyPurchases(purchases, week);
var costPrices = products.getCostPrices(weeklyPurchases);
var totalProfit = products.getTotalProfit(costPrices, sellingPrices, weeklySales);
var mostProfitableProduct = products.getMostProfitableProduct(totalProfit);
var catProfit = products.getCatProfit(categories ,totalProfit);
var mostProfitableCategory = products.getMostProfitableCategory(catProfit);
//introducing my handlebar template
var source = fs.readFileSync('./index.handlebars', 'utf8');
//create the template
var template = handlebars.compile(source);
//combine the source and the template
var results = template({
  listOfProducts: [mostPopularProduct, leastPopularProduct, leastPopularCategory, mostPopularCategory],
  listOfProfitable: [mostProfitableProduct, mostProfitableCategory]
});
//write your js file in the HTML.
  fs.writeFileSync(week + '.html', results);

  // create a route
  app.get('/sales/week', function (req, res) {
   res.send(results);
  });

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});
app.get('/hello', function (req, res) {
 res.send('Hello codeX!');
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

//console.log('Example app listening at http://%s:%s', host, port);

});
