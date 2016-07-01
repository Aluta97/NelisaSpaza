var fs = require('fs');
var handlebars = require('handlebars');
var products = require('./products');

// get the data
var inputSales = products.salesList('./files/week1.csv')
var weeklySales = products.getWeeklySales(inputSales);
var getMostPopularProduct = products.getMostPopularProduct(weeklySales);
var getLeastPopularProduct = products.getLeastPopularProduct(weeklySales);
//////////////////////////////////////
var inputCategories = products.getCategories('./files/categories.csv')
var catSales = products.getCatSales(inputCategories, weeklySales);
var getMostPopularCategory = products.getMostPopularCategory(catSales);
var getLeastPopularCategory = products.getLeastPopularProduct(catSales);
/////////////////////////////////////
var inputPurchases = products.getPurchases('./files/purchases.csv');
//var weeklyPurchases = products.getWeeklyPurchases(inputPurchases)
//var selling_prices = products.getCostPrices(costPrices, weeklyPurchases)
//var totalProfit = products.getTotalProfit(selling_prices, weeklySales)
//var getMostProfitableProduct = products.getMostProfitableProduct(totalProfit)
console.log(inputPurchases);
//introducing my handlebar template
var source = fs.readFileSync('./index.handlebars', 'utf8');
//create the template
var template = handlebars.compile(source);
//combine the source and the template
var results = template({list:[getLeastPopularProduct, getMostPopularProduct, getMostPopularCategory, getLeastPopularCategory ]});
//write your js file in the HTML.
fs.writeFileSync('products.html', results);
