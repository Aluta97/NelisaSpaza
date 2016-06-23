var fs = require('fs');
	exports.salesData = function(filePath){
		var file = fs.readFileSync(filePath,"utf8");
		var newFile = file
		.replace("Day,Date,stock item,No sold,Sales Price\n", "")
		.split('\n');

		var productList = [];
		var productsArray = []

		for(var i = 0; i < newFile.length - 1;i++){
			productsArray.push(newFile[i]);
		}

		productsArray.forEach(function(newProducts){
			var otherProducts = newProducts.split(",");
			var productName = otherProducts[2];
			var quantity = otherProducts[3];
			var sellingPrice = Number(otherProducts[4].replace("R","").replace(",","."));


			var prodObj = {
				productName:productName,
				quantity: Number(quantity),
				sellingPrice: sellingPrice
			};
			productList.push(prodObj);
		});
		return productList;
	};

	exports.groupByQuantity = function(productList){
	 	var productMap ={};

	 	productList.forEach(function(product){
	 		//console.log(product);
	 		var item = product.productName;
	 		var qty = product.quantity;

	 		if(productMap[item] === undefined){
	 			productMap[item] = 0;
	 		}

	 		productMap[item] = productMap[item] + qty;
	 	});
	 	//console.log(productMap);
	 	return productMap;
	};
	exports.salesPerWeek = function(productList){
		//console.log(productList);
		var weeklySales = {};

  		productList.forEach(function(sale) {
  			var product = sale.productName;
  			var sale = Number(sale.quantity * sale.sellingPrice)

    		if (!weeklySales.hasOwnProperty(product)) {
      			weeklySales[product] = 0;
    		}
      		weeklySales[product] += sale;
  		});
  		return weeklySales
	};

	exports.mostPopularProd = function(productMap){
		var mostPopularProduct = {};
		var max = 0;
		for(key in productMap){
			if(productMap[key] > max){
				max = productMap[key];

				mostPopularProduct = {
					product : key,
					quantity: max
				};
			}
		}
		return mostPopularProduct;
	}
	exports.leastPopularProd = function(productMap,max){
		var leastPopularProduct = {};
		var min = max;
		for(key in productMap){
			if(productMap[key] < min){
				min = productMap[key];

				leastPopularProduct = {
					product : key,
					quantity: min
				};
			}
		}
		return leastPopularProduct;
	}
	var productCatMap = {
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
 		}
	exports.mostPopularCat = function(productMap){
 		var catMap = {};

 		for (var product in productMap){
 			var category = productCatMap[product];
 			if (catMap[category] === undefined){
 				catMap[category] = 0;
 			}
 			var prodQty = productMap[product];
 			catMap[category] = catMap[category] + prodQty;
 		}
      //  console.log(catMap);
 		var mostPopularCategory = {};
 		var max = 0;

 		for(var cat in catMap) {
 			var value = catMap[cat];
 			if(catMap[cat] > max){
 				max = catMap[cat];
 				mostPopularCategory = {
 					category: cat,
 					quantity: max
 				}
 			}
 		}
 		return mostPopularCategory;
 	};
 	exports.leastPopularCat = function(productMap,max){


 		var catMap = {};

 		for (var product in productMap){
 			var category = productCatMap[product];

 			if (catMap[category] === undefined){
 				catMap[category] = 0;
 			}
 			var prodQty = productMap[product];
 			catMap[category] = catMap[category] + prodQty;
 		}

 		var leastPopularCategory = {};
 		var min = max;

 		for(var cat in catMap) {
 			var value = catMap[cat];
 			if(catMap[cat] < min){
 				min = catMap[cat];
 				leastPopularCategory = {
 					category: cat,
 					quantity: min
 				}
 			}
 		}
 		return leastPopularCategory;
 	}
 	exports.weeklyPurchases = function(inputPurchases){

 		var purchasesArray = [];

  		for (i = 0; i < inputPurchases.length - 1; i++) {
    		purchasesArray.push(inputPurchases[i].split(";"));
  		}

  		for (var i = purchasesArray.length - 1; i >= 0; i--) {
    		}
  	}

		exports.getMostProfitableProduct = function(totalProfit) {

		  var profit = [];

		  for (var product in totalProfit) {
		    profit.push(totalProfit[product]);
		  }

		  var mostProfit = Math.max.apply(null, profit);

		  for (product in totalProfit) {
		    if (totalProfit[product] === mostProfit) {
		      var mostProfitableProduct = {
		        productName :  product,
		        profit: mostProfit
		      };
		    }
		  }

		  return mostProfitableProduct;
		 }
