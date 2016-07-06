var fs = require('fs');
var handlebars = require('handlebars');
var products = require('./products');

// get the data
var inputSales = products.getSalesList('./files/week1.csv')
var weeklySales = products.getWeeklySales(inputSales);
var getMostPopularProduct = products.getMostPopularProduct(weeklySales);
var getLeastPopularProduct = products.getLeastPopularProduct(weeklySales);
////////////////////////////////////////////////////////////////
var inputCategories = products.getCategories('./files/categories.csv')
var catSales = products.getCatSales(inputCategories, weeklySales);
var getMostPopularCategory = products.getMostPopularCategory(catSales);
var getLeastPopularCategory = products.getLeastPopularCategory(catSales);
///////////////////////////////////////////////////////
var purchases = products.getPurchases('./files/purchases.csv');
// var weeklyPurchases = products.getWeeklyPurchases(purchases, week);
// console.log(weeklyPurchases);
// var costPrices = products.getCostPrices(weeklyPurchases);
// var totalProfit = products.getTotalProfit(costPrices, selling_prices, weekly_sales);
// var getMostProfitableProduct = products.getMostProfitableProduct(totalProfit);


//var catProfit = products.getCatProfit(categoryMap, totalProfit);
//var getMostProfitableCategory = products.getMostProfitableCategory(catProfit);


//introducing my handlebar template
var source = fs.readFileSync('./index.handlebars', 'utf8');
//create the template
var template = handlebars.compile(source);
//combine the source and the template
var results = template({
  listOfProducts: [getLeastPopularProduct, getMostPopularProduct, getLeastPopularCategory, getMostPopularCategory]
});
//write your js file in the HTML.
fs.writeFileSync('week1.html', results);
