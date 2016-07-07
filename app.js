var fs = require('fs');
var handlebars = require('handlebars');
var products = require('./products');
var categories = require('./files/categories.json')
var sellingPrices = require('./files/sales.json')
//get the data
var week = process.argv[2];

var inputSales = products.getSalesList('./files/'+ week +'.csv');
var weeklySales = products.getWeeklySales(inputSales);
var getMostPopularProduct = products.getMostPopularProduct(weeklySales);
var getLeastPopularProduct = products.getLeastPopularProduct(weeklySales);
////////////////////////////////////////////////////////////////
var inputCategories = products.getCategories('./files/categories.csv')
var catSales = products.getCatSales(inputCategories, weeklySales);
var getMostPopularCategory = products.getMostPopularCategory(catSales);
var getLeastPopularCategory = products.getLeastPopularCategory(catSales);
// ///////////////////////////////////////////////////////
var purchases = products.getPurchases('./files/purchases.csv');
var weeklyPurchases = products.getWeeklyPurchases(purchases, week);
var costPrices = products.getCostPrices(weeklyPurchases);
var totalProfit = products.getTotalProfit(costPrices, sellingPrices, weeklySales);
var mostProfitableProduct = products.getMostProfitableProduct(totalProfit);

var catProfit = products.getCatProfit(categories ,totalProfit);
var getMostProfitableCategory = products.getMostProfitableCategory(catProfit);

//introducing my handlebar template
var source = fs.readFileSync('./index.handlebars', 'utf8');
//create the template
var template = handlebars.compile(source);
//combine the source and the template
var results = template({
  listOfProducts: [getMostPopularProduct, getLeastPopularProduct, getLeastPopularCategory, getMostPopularCategory,
                    mostProfitableProduct, getMostProfitableCategory]
});
//write your js file in the HTML.
  fs.writeFileSync(week + '.html', results);
