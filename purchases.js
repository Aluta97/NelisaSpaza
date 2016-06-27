var fs = require('fs');

exports.purchasesData = function(file){

	var lines = fs.readFileSync(file, "utf8")
  .replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "")
  .replace(/,/g, ".")
  .split('\n');

  var purchasesArray = [];

  for (i = 0; i < lines.length - 1; i++) {
    purchasesArray.push(lines[i].split(";"));
  }
  var week0purchases = [];
  var week1purchases = [];
  var week2purchases = [];
  var week3purchases = [];
  var week4purchases = [];

  purchasesArray.forEach(function(index){
    var date = new Date(index[1]);

    var date0 = new Date('01-Feb');
    var date1 = new Date('08-Feb');
    var date2 = new Date('15-Feb');
    var date3 = new Date('22-Feb');
    var date4 = new Date('01-Mar');

    if(date < date0){
      week0purchases.push(index);
    }
    if(date > date0 && date < date1){
      week1purchases.push(index);
    }
    if(date > date1 && date < date2){
      week2purchases.push(index);
    }
    if(date > date2  && date < date3){
      week3purchases.push(index);
    }
    if(date > date3 && date < date4){
      week4purchases.push(index         );
    }
  });

  purchases = {
    "week0": week0purchases,
    "week1": week1purchases,
    "week2": week2purchases,
    "week3": week3purchases,
    "week4": week4purchases
  };
  return (purchases);
};

exports.purchasesPerWeek = function(purchases,week){

  var purchasesList = [];
  purchases[week].forEach(function(array) {
    purchasesList.push([array[2], Number(array[5].replace(/R/g,""))]);
  });
  var weeklyPurchases = {};

  purchasesList.forEach(function(array) {

    if (!weeklyPurchases.hasOwnProperty(array[0])) {
      weeklyPurchases[array[0]] = 0;
    }
      weeklyPurchases[array[0]] += array[1];
  });
  return weeklyPurchases;
}

exports.profitMapping = function(weeklyPurchases, weeklySales){
	var profitMap = {};
    var profit = {};

 	 for(product in weeklyPurchases){
    for(key in weeklySales){
      if(product === key){
        profitMap[product] = weeklyPurchases[product] - weeklySales[key];
      }
    }
   }
   //console.log(profitMap);
 	return profitMap;
};

exports.getMostProfitableProduct = function(profitMap){
  var profitObj = {};
  var max = 0;

  for(var key in profitMap){
    if(profitMap[key] > max){
      max = profitMap[key];
      profitObj = {
        productName : key,
        qty : max
      }
    }
  }
  //console.log(profitObj);
  return profitObj;
}

exports.catProfit = function(profitMap){


  var catMap = {
      'Milk 1l': 'Dairy',
      'Imasi': 'Dairy',
      'Bread': 'Bakery',
      'Chakalaka Can': 'Canned Food',
      'Gold Dish Vegetable Curry Can': 'Canned Food',
      'Fanta 500ml': 'Soft-Drinks',
      'Coke 500ml': 'Soft-Drinks',
      'Cream Soda 500ml': 'Soft-Drinks',
      'Iwisa Pap 5kg': 'Starch',
      'Top Class Soy Mince': 'Meat',
      'Shampoo 1 litre': 'Toiletries',
      'Soap Bar': 'Toiletries',
      'Bananas - loose': 'Fruits',
      'Apples - loose': 'Fruits',
      'Mixed Sweets 5s': 'Candy',
      'Heart Chocolates': 'Candy',
      'Rose (plastic)': 'Extras',
      'Valentine Cards': 'Extras'
    };

  var catProfitMap = {};

  for (var product in profitMap){
    var category = catMap[product];
    if (catProfitMap[category] === undefined){
      catProfitMap[category] = 0;
    }
    var catProfit = profitMap[product];
    catProfitMap[category] = catProfitMap[category] + catProfit;
  }
  var mostProfitableCategory = {};
    var max = 0;

    for(var cat in catProfitMap) {
      var value = catProfitMap[cat];
      if(catProfitMap[cat] > max){
        max = catProfitMap[cat];
        mostProfitableCategory = {
          category: cat,
          profit: max
        }
      }
    }
  return mostProfitableCategory;
};
