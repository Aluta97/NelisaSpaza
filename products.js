var fs = require('fs');

exports.getSalesList = function(filepath) {

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
    description: 'Most popular Product',
    product: mostPP,
    quantity: mostSold
  };
//  console.log(mostPopularProduct)
  return mostPopularProduct;
};

exports.getLeastPopularProduct = function(weeklySales) {
//console.log("weeklySales", weeklySales);
  var leastSold = 1000;
  var leastPP = "";

  for (product in weeklySales) {
    if (weeklySales[product] < leastSold) {
      leastSold = weeklySales[product];
      leastPP = product;
    }
  }

  var leastPopularProduct = {
    description: 'Least popular Product',
    product: leastPP,
    quantity: leastSold
  };
//  console.log(leastPopularProduct)
  return leastPopularProduct;
};
//////////////////////////////////////////
exports.getCategories = function(filepath) {

  var inputCategories = fs.readFileSync(filepath, "utf8");
  inputCategories = inputCategories.replace("Product,Category\n", "").split('\n');
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
//console.log(c)
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
    description: "Most popular Category",
    product:  category,
    quantity: mostCatSold
  }

  return mostPopularCategory;
}

exports.getLeastPopularCategory = function(catSales) {

  var leastCatSold = Infinity;
  var category = "";

  for (var cat in catSales) {
    if (catSales[cat] < leastCatSold) {
      leastCatSold = catSales[cat];
      category = cat;
    }
  }
  var leastPopularCategory = {
    description: "Least popular Category",
    product: category,
    quantity: leastCatSold
  }
  return leastPopularCategory;
}
/////////////////////////////////////////////////////////////
exports.getPurchases = function(filepath) {

  var inputPurchases = fs.readFileSync(filepath, "utf8")
  .replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "")
  .replace(/R/g, "")
  .replace(/,/g, ".")
  .replace(/ose (plastic)/g, "Rose (plastic)")
  .split('\n');
//console.log(inputPurchases)
  var purchasesArray = [];

  for (i = 0; i < inputPurchases.length - 1; i++) {
    purchasesArray.push(inputPurchases[i].split(";"));
  }

  for (var i = purchasesArray.length - 1; i >= 0; i--) {
    if (purchasesArray[i][1] === "01-Mar") {
      purchasesArray.splice(i, 1);
    }
  }
  var week0Purchases = [];
  var week1Purchases = [];
  var week2Purchases = [];
  var week3Purchases = [];
  var week4Purchases = [];
  var weeklyPurchases = {};

  for (i = 0; i < purchasesArray.length; i++) {
    dt = purchasesArray[i][1];
    var date = new Date(dt);

    if (date.getMonth() === 0) {
      week0Purchases.push(purchasesArray[i]);
    }

    if (date.getDate() < 8) {
      week1Purchases.push(purchasesArray[i]);
    }

    if (date.getDate() > 7 && date.getDate() < 15) {
      week2Purchases.push(purchasesArray[i]);
    }

    if (date.getDate() > 15 && date.getDate() < 22) {
      week3Purchases.push(purchasesArray[i]);
    }

    if (date.getDate() > 21 && date.getDate() < 28 && date.getMonth() === 1) {
      week4Purchases.push(purchasesArray[i]);
    }
  }

  purchases = {
    "week0": week0Purchases,
    "week1": week1Purchases,
    "week2": week2Purchases,
    "week3": week3Purchases,
    "week4": week4Purchases
  };
//console.log(purchases)
  return purchases;
};
exports.getWeeklyPurchases = function(purchases, week) {
//console.log(week);
  var purchasesList = [];
//console.log(purchases[week]);
  purchases[week].forEach(function(array) {
    purchasesList.push([array[2], Number(array[4])]);
  });
// console.log(purchases[week]);

  purchasesList.sort();

  var weeklyPurchases = {};
//console.log(purchasesList);
  purchasesList.forEach(function(array) {

    if (!weeklyPurchases.hasOwnProperty(array[0])) {
      weeklyPurchases[array[0]] = [array[1]];
    } else {
      weeklyPurchases[array[0]].push(array[1]);
    }
  });
 //console.log("week", weeklyPurchases)
  return weeklyPurchases;
};
exports.getCostPrices = function(weeklyPurchases) {

  var costPrices = {};

  for (var fruit in weeklyPurchases) {
    var total = 0;

    weeklyPurchases[fruit].forEach(function(price) {
      total += price;
    });

    var averageCost = Number((total / (weeklyPurchases[fruit].length)).toFixed(2));

    costPrices[fruit] = averageCost;
  }
//console.log(costPrices);
  return costPrices;
}
exports.getTotalProfit = function(costPrices, selling_prices, weekly_sales) {
//console.log("weekly_sales", weekly_sales);
  var profitMap = {};
  for (var product in selling_prices) {
    for (var products in costPrices) {
      if (product === products) {
        profitMap[product] = (selling_prices[product] - costPrices[products])
      }
    }
  }

  var totalProfit = {};

  for (var product in profitMap) {
    for (var products in weekly_sales) {
      if (product === products) {
        totalProfit[product] = Number((weekly_sales[products] * profitMap[product]).toFixed(2))
      }
    }
  }
//console.log("totalProfit", profitMap);
  return totalProfit;
}

exports.getMostProfitableProduct = function(totalProfit) {
  var profit = [];

  for (var product in totalProfit) {
    profit.push(totalProfit[product]);
  }

  var mostProfit = Math.max.apply(null, profit);
//console.log(mostProfit);
  for (product in totalProfit) {
    if (totalProfit[product] === mostProfit) {
      var mostProfitableProduct = {
        description : "Most Profitable Product",
        product :  product,
        profit: mostProfit
      };
    }
  }
console.log(mostProfitableProduct);
  return mostProfitableProduct;
}
///////////////////////////////////////////////////////////////////
exports.getCatProfit = function(categories, totalProfit) {
//console.log(totalProfit);
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
    description: "Most Profitable Category",
    cat: mostProfitableCat,
    profit: maxProfit
  }
  return mostProfitableCategory;
}
