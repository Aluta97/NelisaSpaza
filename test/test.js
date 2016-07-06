var assert = require('assert');
var products = require('../products')

var sales = products.getSalesList('./files/week1.csv');
var sales2 = products.getSalesList('./files/week2.csv');
var sales3 = products.getSalesList('./files/week3.csv');
var sales4 = products.getSalesList('./files/week4.csv');

var weekly_sales = products.getWeeklySales(sales);
var weekly_sales2 = products.getWeeklySales(sales2);
var weekly_sales3 = products.getWeeklySales(sales3);
var weekly_sales4 = products.getWeeklySales(sales4);
describe("products", function() {
  it('should return length of processed sales list of week1', function() {
    assert.equal(104, products.getSalesList('./files/week1.csv').length);
  });

  it('should return length of processed sales list of week2', function() {
    assert.equal(118, products.getSalesList('./files/week2.csv').length);
  });

  it('should return length of processed sales list of week3', function() {
    assert.equal(105, products.getSalesList('./files/week3.csv').length);
  });
  it('should return length of processed sales list of week4', function() {
    assert.equal(120, products.getSalesList('./files/week4.csv').length);
  });

    });

  describe("most and least popular products", function(){
    it('should return the most popular product sold for week1', function() {
      assert.deepEqual(products.getMostPopularProduct(weekly_sales), {
        description: 'Most popular Product',
        product: 'Coke 500ml',
        quantity: 54
    })
  })
  it('should return the most popular product sold for week 2', function(){
    assert.deepEqual(products.getMostPopularProduct(weekly_sales2),{
      description: 'Most popular Product',
      product: 'Mixed Sweets 5s',
      quantity: 54
    });
  })
  it('should return the most popular product sold for week 3', function(){
    assert.deepEqual(products.getMostPopularProduct(weekly_sales3),{
      description: 'Most popular Product',
      product: 'Milk 1l',
      quantity: 30
    });
  })
  it('should return the most popular product sold for week 4', function(){
    assert.deepEqual(products.getMostPopularProduct(weekly_sales4),{
      description: 'Most popular Product',
      product: 'Coke 500ml',
      quantity: 45
    });
  })

  it('should return the least popular product sold for week1', function() {
    assert.deepEqual(products.getLeastPopularProduct(weekly_sales), {
      description: 'Least popular Product',
      product: 'Shampoo 1 litre',
      quantity: 3
    });
  });
  it('should return the least popular product sold for week1', function() {
    assert.deepEqual(products.getLeastPopularProduct(weekly_sales2), {
      description: 'Least popular Product',
      product: 'Soap Bar',
      quantity: 5
    });
  });
  it('should return the least popular product sold for week1', function() {
    assert.deepEqual(products.getLeastPopularProduct(weekly_sales3), {
      description: 'Least popular Product',
      product: 'Iwisa Pap 5kg',
      quantity: 4
    });
  });
  it('should return the least popular product sold for week1', function() {
    assert.deepEqual(products.getLeastPopularProduct(weekly_sales4), {
      description: 'Least popular Product',
      product: 'Shampoo 1 litre',
      quantity: 13
    });
  });
});
/////////////////////////////////////////////////

var purchases = products.getPurchases('./files/purchases.csv');
var weekly_purchases = products.getWeeklyPurchases(purchases, "week4");
//console.log(weekly_purchases);
describe("Most profitable product", function() {
  it('should return the length of purchases for week1', function() {
    var result = purchases.week1.length;
    assert.equal(result, 23);
  });
  it('should return the length of purchases for week2', function() {
    var result = purchases.week2.length;
    assert.equal(result, 30);
  });
  it('should return the length of purchases for week3', function() {
    var result = purchases.week3.length;
    assert.equal(result, 32);
  });
  it('should return the length of purchases for week4', function() {
    var result = purchases.week4.length;
    assert.equal(result, 34);
  });
  it('should return the map of product and cost price for week 4', function() {
    var result = products.getWeeklyPurchases(purchases, 'week4');
    assert.deepEqual(result, {
      'Imasi': [17, 17],
      'Apples - loose': [1.5, 1.5],
      'Bananas - loose': [1, 1],
      Bread: [11, 9, 9],
      'Chakalaka Can': [7, 7, 9],
      'Coke 500ml': [3.5, 3.5],
      'Cream Soda 500ml': [4.5, 4.5],
      'Fanta 500ml': [4.5, 4.5, 6.5],
      'Gold Dish Vegetable Curry Can': [5, 5, 8.5],
      'Iwisa Pap 5kg': [20, 30],
      'Milk 1l': [7, 7],
      'Mixed Sweets 5s': [3],
      'Shampoo 1 litre': [20, 20],
      'Soap Bar': [3, 3, 3],
      'Top Class Soy Mince': [8, 8]
    });
  });

  it('should return cost price map for week4', function() {
    var result = products.getCostPrices(weekly_purchases);
    assert.deepEqual(result, {
      'Apples - loose': 1.5,
      'Bananas - loose': 1,
      Bread: 9.67,
      'Chakalaka Can': 7.67,
      'Coke 500ml': 3.5,
      'Cream Soda 500ml': 4.5,
      'Fanta 500ml': 5.17,
      'Gold Dish Vegetable Curry Can': 6.17,
      Imasi: 17,
      'Iwisa Pap 5kg': 25,
      'Milk 1l': 7,
      'Mixed Sweets 5s': 3,
      'Shampoo 1 litre': 20,
      'Soap Bar': 3,
      'Top Class Soy Mince': 8
    });
  });
  it('should return cost price map for week4', function() {
    var result = products.getCostPrices(weekly_purchases);
    assert.deepEqual(result, {
      'Apples - loose': 1.5,
      'Bananas - loose': 1,
      Bread: 9.67,
      'Chakalaka Can': 7.67,
      'Coke 500ml': 3.5,
      'Cream Soda 500ml': 4.5,
      'Fanta 500ml': 5.17,
      'Gold Dish Vegetable Curry Can': 6.17,
      Imasi: 17,
      'Iwisa Pap 5kg': 25,
      'Milk 1l': 7,
      'Mixed Sweets 5s': 3,
      'Shampoo 1 litre': 20,
      'Soap Bar': 3,
      'Top Class Soy Mince': 8
    });
  });

  it('should return the total profit map', function() {
    assert.deepEqual(products.getTotalProfit({
      'Apples - loose': 1.5,
      'Bananas - loose': 1,
      Bread: 9.67,
      'Chakalaka Can': 7.67,
      'Coke 500ml': 3.5,
      'Cream Soda 500ml': 4.5,
      'Fanta 500ml': 5.17,
      'Gold Dish Vegetable Curry Can': 6.17,
      Amasi: 17,
      'Iwisa Pap 5kg': 25,
      'Milk 1l': 7,
      'Mixed Sweets 5s': 3,
      'Shampoo 1 litre': 20,
      'Soap Bar': 3,
      'Top Class Soy Mince': 8
    },{
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
      'Mixed Sweets 5s': 3
    }, {
      'Milk 1l': 41,
      Amasi: 31,
      Bread: 30,
      'Chakalaka Can': 28,
      'Gold Dish Vegetable Curry Can': 30,
      'Fanta 500ml': 22,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 15,
      'Top Class Soy Mince': 39,
      'Shampoo 1 litre': 10,
      'Soap Bar': 19,
      'Bananas - loose': 18,
      'Apples - loose': 27,
      'Mixed Sweets 5s': 28
    }), {
      Amasi: 248,
      'Apples - loose': 13.5,
      'Bananas - loose': 18,
      Bread: 69.9,
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
    });
  });

  it('should return the most profitable product sold', function() {
    assert.deepEqual(products.getMostProfitableProduct({
      Amasi: 248,
      'Apples - loose': 13.5,
      'Bananas - loose': 18,
      Bread: 69.9,
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
      description : 'Most Profitable Product',
      product : 'Amasi',
      profit : 248
    });
  });

});
////////////////////////////////////////////////
var categoryMap = products.getCategories('./files/categories.csv');

describe("categories", function() {

  it('should return a map of categories and products', function() {
    assert.deepEqual(products.getCategories('./files/categories.csv'), {
      'Milk 1l': ' Dairy',
      'Amasi ': ' Dairy',
      'Bread': ' Bakery',
      'Chakalaka Can': ' Canned Food',
      'Gold Dish Vegetable Curry Can': ' Canned Food',
      'Fanta 500ml': ' Soft Drinks',
      'Coke 500ml': ' Soft Drinks',
      'Cream Soda 500ml': ' Soft Drinks',
      'Iwisa Pap 5kg': ' Starch',
      'Top Class Soy Mince': ' Starch',
      'Shampoo 1 litre': ' Toiletries',
      'Soap Bar': ' Toiletries',
      'Bananas - loose': ' Fruit',
      'Apples - loose': ' Fruit',
      'Mixed Sweets 5s': ' Sweets',
      'Heart Chocolates': ' Sweets',
      'Rose (plastic)': ' Extras',
      'Valentine Cards': ' Extras',
    });
  });

  it('should return a map of categories sales', function() {
    assert.deepEqual(products.getCatSales(categoryMap, weekly_sales), {
    ' Dairy': 39,
    ' Fruit': 83,
    ' Bakery': 45,
    ' Canned Food': 40,
    ' Soft Drinks': 109,
    ' Starch': 39,
    ' Sweets': 44,
    ' Toiletries': 15
    });
  });

  it('should return the most popular category', function() {
    assert.deepEqual(products.getMostPopularCategory({
      ' Dairy': 39,
      ' Fruit': 83,
      ' Bakery': 45,
      ' Canned Food': 40,
      ' Soft Drinks': 109,
      ' Starch': 39,
      ' Sweets': 44,
      ' Toiletries': 15
    }), {
      description: 'Most popular Category',
      product: ' Soft Drinks',
      quantity: 109
    });
  });

  it('should return the least popular category', function() {
    assert.deepEqual(products.getLeastPopularCategory({
      ' Dairy': 39,
      ' Fruit': 83,
      ' Bakery': 45,
      ' Canned Food': 40,
      ' Soft Drinks': 109,
      ' Starch': 39,
      ' Sweets': 44,
      ' Toiletries': 15
    }), {
      description: 'Least popular Category',
      product: ' Toiletries',
      quantity: 15
    });
  });

  it('should return a categories profit map', function() {
    assert.deepEqual(products.getCatProfit(categoryMap, {
      Amasi: 248,
      'Apples - loose': 13.5,
      'Bananas - loose': 18,
      Bread: 69.9,
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
      ' Dairy': 123,
      ' Fruit': 31.5,
      ' Bakery': 69.9,
      ' Canned Food': 150.14,
      ' Soft Drinks': 212.26,
      ' Starch': 231,
      ' Sweets': 0,
      ' Toiletries': 157
    });
  });

  it('should return the most profitable category and the profit', function() {
    assert.deepEqual(products.getMostProfitableCategory({
      ' Dairy': 123,
      ' Fruit': 31.5,
      ' Bakery': 69.9,
      ' Canned Food': 150.14,
      ' Soft Drinks': 212.26,
      ' Starch': 231,
      ' Sweets': 0,
      ' Toiletries': 157
    }), {
      description: 'Most Profitable Category',
      cat: ' Starch',
      profit: 231
    });
  });

});
