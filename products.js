
var fs = require('fs');

exports.salesList = function(filepath) {

  var inputSales = fs.readFileSync(filepath, "utf8");
  inputSales = inputSales.replace("Day,Date,stock item,No sold,Sales Price\n", "").split('\n');

  var salesArray = [];

  for (i = 0; i < inputSales.length - 1; i++) {
    salesArray.push(inputSales[i].split(","));
  }
  var salesList = [];

  salesArray.forEach(function(array) {
    salesList.push([array[2], Number(array[3]), array[4]]);
  });

  salesList.sort();
  return salesList;
};

exports.getWeeklySales = function(salesList) {

  var weeklySales = {};

  salesList.forEach(function(array) {
    if (!weeklySales.hasOwnProperty(array[0])) {
      weeklySales[array[0]] = array[1];
    } else {
      weeklySales[array[0]] += array[1];
    }
  });

  return weeklySales;
};

exports.getMostPopularProduct = function(weeklySales) {

  var mostSold = 0;
  var mostPP = "";

  for (var product in weeklySales) {
    if (weeklySales[product] > mostSold) {
      mostSold = weeklySales[product];
      mostPP = product;
    }
  }

  var mostPopularProduct = {
    description: 'most popular product',
    product: mostPP,
    quantity: mostSold
  };
//  console.log(mostPopularProduct)
  return mostPopularProduct;
};

exports.getLeastPopularProduct = function(weeklySales) {

  var leastSold = 1000;
  var leastPP = "";

  for (product in weeklySales) {
    if (weeklySales[product] < leastSold) {
      leastSold = weeklySales[product];
      leastPP = product;
    }
  }

  var leastPopularProduct = {
    description: 'least popular product',
    product: leastPP,
    quantity: leastSold
  };
//  console.log(leastPopularProduct)
  return leastPopularProduct;
};
/////////////////////////////////////
exports.getCategories = function(filepath) {

  var inputCategories = fs.readFileSync(filepath, "utf8");
  inputCategories = inputCategories.split('\n');

  var categoriesArray = [];

  for (i = 0; i < inputCategories.length - 1; i++) {
    categoriesArray.push(inputCategories[i].split(","));
  }

  categoriesArray.sort();

  var categories = {};

  categoriesArray.forEach(function(array) {
    if (!categories.hasOwnProperty(array[0])) {
      categories[array[0]] = array[1];
    }
  })

  return categories;

}

exports.getCatSales = function(categories, weekly_sales) {

  var catSales = {};

  for (var product in categories) {
    for (var products in weekly_sales) {
      if (product === products) {
        if (!catSales.hasOwnProperty(categories[product])) {
          catSales[categories[product]] = weekly_sales[products];
        } else {
          catSales[categories[product]] += weekly_sales[products];
        }
      }
    }
  }

  return catSales;
}

exports.getMostPopularCategory = function(catSales) {

  var mostCatSold = 0;
  var category = "";

  for (var cat in catSales) {
    if (catSales[cat] > mostCatSold) {
      mostCatSold = catSales[cat];
      category = cat;
    }
  }

  var mostPopularCategory = {
    "description": "most Popular Category",
    "product": category,
    "quantity": mostCatSold
  }

  return mostPopularCategory;
}

exports.getLeastPopularCategory = function(catSales) {

  var leastCatSold = 50;
  var category = "";

  for (var cat in catSales) {
    if (catSales[cat] < leastCatSold) {
      leastCatSold = catSales[cat];
      category = cat;
    }
  }

  var leastPopularCategory = {
    "description": "least Popular Category",
    "product": category,
    "quantity": leastCatSold
  }
//console.log(leastPopularCategory);
  return leastPopularCategory;
}

exports.getCatProfit = function(categories, totalProfit) {

  var catProfit = {};

  for (var product in categories) {
    for (var products in totalProfit) {
      if (product === products) {
        if (!catProfit.hasOwnProperty(categories[product])) {
          catProfit[categories[product]] = totalProfit[products];
        } else {
          catProfit[categories[product]] += totalProfit[products];
        }
      }
    }
  }

  return catProfit;
}

exports.getMostProfitableCategory = function(catProfit) {

  var maxProfit = 0;
  var mostProfitableCat = "";

  for (var cat in catProfit) {
    if (catProfit[cat] > maxProfit) {
      maxProfit = catProfit[cat];
      mostProfitableCat = cat;
    }
  }

  var mostProfitableCategory = {
    "description": "most Profitable Category",
    "product": mostProfitableCat,
    "prof": maxProfit
  }

  return mostProfitableCategory;
}
