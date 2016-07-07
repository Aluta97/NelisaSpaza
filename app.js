var fs = require('fs');
var handlebars = require('handlebars');
var products = require('./products');

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

 ///////////////////////////////////////////////////////
var purchases = products.getPurchases('./files/purchases.csv');
//console.log(purchases);
var weeklyPurchases = products.getWeeklyPurchases(purchases, week);
var selling_prices = {
   'Milk 1l': 10,
  Amasi: 25,
  Bread: 12,
  'Chakalaka Can': 10,
  'Gold Dish Vegetable Curry Can': 9,
  'Fanta 500ml': 6.5,
  'Coke 500ml': 6.5,
  'Cream Soda 500ml': 7.5,
  'Iwisa Pap 5kg': 30,
  'Top Class Soy Mince': 12,
  'Shampoo 1 litre': 30,
  'Soap Bar': 6,
  'Bananas - loose': 2,
  'Apples - loose': 2,
  'Mixed Sweets 5s': 3 }

var costPrices = products.getCostPrices(weeklyPurchases);
var totalProfit = products.getTotalProfit(costPrices, selling_prices, weeklySales);
 var mostProfitableProduct = products.getMostProfitableProduct(totalProfit);
 var categories = { 'Amasi ': ' Dairy',
   'Apples - loose': ' Fruit',
   'Bananas - loose': ' Fruit',
   Bread: ' Bakery',
   'Chakalaka Can': ' Canned Food',
   'Coke 500ml': ' Soft Drinks',
   'Cream Soda 500ml': ' Soft Drinks',
   'Fanta 500ml': ' Soft Drinks',
   'Gold Dish Vegetable Curry Can': ' Canned Food',
   'Heart Chocolates': ' Sweets',
   'Iwisa Pap 5kg': ' Starch',
   'Milk 1l': ' Dairy',
   'Mixed Sweets 5s': ' Sweets',
   'Rose (plastic)': ' Extras',
   'Shampoo 1 litre': ' Toiletries',
   'Soap Bar': ' Toiletries',
   'Top Class Soy Mince': ' Starch',
   'Valentine Cards': ' Extras' }
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
