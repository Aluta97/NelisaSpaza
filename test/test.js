var assert = require("assert");
var products = require("../products");
var purchases = require("../purchases");

describe("mapping the weeks csv", function() {
  it('it should return in all weeks purchases', function() {
    var results = purchases.purchasesData('./files/purchases.csv');
    assert.equal(23, results["week1"].length);
  });

  it('it should return purchases per week', function() {
    var myPurchases = purchases.purchasesData('./files/purchases.csv');
    var results = purchases.purchasesPerWeek(myPurchases, "week1");
    assert.deepEqual({
      'Shampoo 1 litre': 60,
      'Soap Bar': 39,
      'Bananas - loose': 20,
      'Apples - loose': 300,
      'Mixed Sweets 5s': 1170,
      'Bread': 314,
      'Imasi': 521,
      'Chakalaka Can': 105,
      'Coke 500ml': 126,
      'Cream Soda 500ml': 81,
      'Fanta 500ml': 108,
      'Gold Dish Vegetable Curry Can': 75,
      'Iwisa Pap 5kg': 100,
      'Milk 1l': 70,
      'Top Class Soy Mince': 80
    }, results);
  });
});
describe("Finds most most popular products", function() {
  it('it should return most popular product for week1', function() {
    var productList = products.salesData('./files/week1.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularProd(productMap);

    assert.deepEqual({
      "product": "Coke 500ml",
      "quantity": 54
    }, results);
  });
  it('it should return most popular product for week2', function() {
    var productList = products.salesData('./files/week2.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularProd(productMap);

    assert.deepEqual({
      "product": "Mixed Sweets 5s",
      "quantity": 54
    }, results);
  });
  it('it should return most popular product for week3', function() {
    var productList = products.salesData('./files/week3.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularProd(productMap);

    assert.deepEqual({
      "product": "Milk 1l",
      "quantity": 30
    }, results);
  });
  it('it should return most popular product for week4', function() {
    var productList = products.salesData('./files/week4.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularProd(productMap);

    assert.deepEqual({
      "product": "Milk 1l",
      "quantity": 45
    }, results);
  });
});

describe("Finds least popular products", function() {
  it('it should return least popular product for week1', function() {
    var productList = products.salesData('./files/week1.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularProd(productMap, 54);

    assert.deepEqual({
      "product": "Shampoo 1 litre",
      "quantity": 3
    }, results);
  });
  it('it should return least popular product for week2', function() {
    var productList = products.salesData('./files/week2.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularProd(productMap, 54);

    assert.deepEqual({
      "product": "Soap Bar",
      "quantity": 5
    }, results);
  });
  it('it should return least popular product for week3', function() {
    var productList = products.salesData('./files/week3.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularProd(productMap, 30);

    assert.deepEqual({
      "product": "Iwisa Pap 5kg",
      "quantity": 4
    }, results);
  });
  it('it should return least popular product for week4', function() {
    var productList = products.salesData('./files/week4.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularProd(productMap, 45);

    assert.deepEqual({
      "product": "Shampoo 1 litre",
      "quantity": 13
    }, results);
  });
});

describe("Finds most popular categories", function() {
  it('it should return most popular category for week1', function() {
    var productList = products.salesData('./files/week1.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularCat(productMap);

    assert.deepEqual({
      "category": "Soft-Drinks",
      "quantity": 109
    }, results);
  });
  it('it should return most popular category for week2', function() {
    var productList = products.salesData('./files/week2.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularCat(productMap);

    assert.deepEqual({
      "category": "Soft-Drinks",
      "quantity": 87
    }, results);
  });
  it('it should return most popular category for week3', function() {
    var productList = products.salesData('./files/week3.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularCat(productMap);

    assert.deepEqual({
      "category": "Dairy",
      "quantity": 55
    }, results);
  });
  it('it should return most popular category for week4', function() {
    var productList = products.salesData('./files/week4.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.mostPopularCat(productMap);

    assert.deepEqual({
      "category": "Soft-Drinks",
      "quantity": 88
    }, results);
  });
});

describe("Finds least popular categories", function() {
  it('it should return least popular category for week1', function() {
    var productList = products.salesData('./files/week1.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularCat(productMap, 109);

    assert.deepEqual({
      "category": "Toiletries",
      "quantity": 15
    }, results);
  });
  it('it should return least popular category for week2', function() {
    var productList = products.salesData('./files/week2.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularCat(productMap, 87);

    assert.deepEqual({
      "category": "Starch",
      "quantity": 10
    }, results);
  });
  it('it should return least popular category for week3', function() {
    var productList = products.salesData('./files/week3.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularCat(productMap, 55);

    assert.deepEqual({
      "category": "Starch",
      "quantity": 4
    }, results);
  });
  it('it should return least popular category for week4', function() {
    var productList = products.salesData('./files/week4.csv');
    var productMap = products.groupByQuantity(productList);
    var results = products.leastPopularCat(productMap, 88);

    assert.deepEqual({
      "category": "Starch",
      "quantity": 16
    }, results);
  });
});
describe('Find most profitable product and category  ', function() {
    it('should return the most profitable product', function() {
      assert.deepEqual(purchases.getMostProfitableProduct({
        'Amasi': 248,
        'Apples - loose': 13.5,
        'Bananas - loose': 18,
        'Bread': 69.9,
        'Chakalaka Can': 65.24,
        'Coke 500ml': 126,
        'Cream Soda 500ml': 57,
        'Fanta 500ml': 29.26,
        'Gold Dish Vegetable Curry Can': 84.9,
        'Iwisa Pap 5kg': 75,
        'Milk 1l': 123,
        'Mixed Sweets 5s': 0,
        'Shampoo 1 litre': 100,
        'Soap Bar': 57,
        'Top Class Soy Mince': 156
      }), {
        productName: 'Amasi',
        qty: 248
      });
    })
       it('it should return the most profititable category', function(){
        var productList = products.salesData('./files/week1.csv');
        var weeklySales = products.salesPerWeek(productList);
        var myPurchases = purchases.purchasesData('./files/purchases.csv');
        var weeklyPurchases = purchases.purchasesPerWeek(myPurchases, "week1");
        var profitMap = purchases.profitMapping(weeklySales, weeklyPurchases);
        var results = purchases.catProfit(profitMap);
        assert.deepEqual(
          {category: 'Dairy',
           profit: 549 }
          ,results)
      })
   });
