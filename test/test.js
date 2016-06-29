var assert = require('assert');
var products = require('../products')

var sales = products.salesList('./files/week1.csv');
var weekly_sales = products.getWeeklySales(sales);

describe("products", function() {

  it('should return length of processed sales list of week1', function() {
    assert.equal(104, products.salesList('./files/week1.csv').length);
  });

  it('should return length of processed sales list of week2', function() {
    assert.equal(118, products.salesList('./files/week2.csv').length);
  });

  it('should return length of processed sales list of week3', function() {
    assert.equal(105, products.salesList('./files/week3.csv').length);
  });
  it('should return length of processed sales list of week4', function() {
    assert.equal(120, products.salesList('./files/week4.csv').length);
  });
  it('should return the most popular product sold for week1', function() {
    assert.deepEqual(products.getMostPopularProduct(weekly_sales), {
      "description": 'most popular product',
      "product": 'Coke 500ml',
      "quantity": 54
    });
  });
  it('should return the least popular product sold for week1', function() {
    assert.deepEqual(products.getLeastPopularProduct(weekly_sales), {
      "description": 'least popular product',
      "product": 'Shampoo 1 litre',
      "quantity": 3
    });
  });
});


describe("categories", function() {
  it('should return the most popular category  and the quantity sold', function() {
    assert.deepEqual(products.getMostPopularCategory({
      Dairy: 72,
      Fruit: 45,
      Bakery: 30,
      'Canned Food': 58,
      'Soft Drinks': 83,
      Starch: 54,
      Sweets: 28,
      Toiletries: 29
    }), {
      "description": 'most Popular Category',
      "product": 'Soft Drinks',
      "quantity": 83
    });
  });
  it('should return the least popular category sold in week1', function() {
    assert.deepEqual(products.getLeastPopularCategory({
      Dairy: 72,
      Fruit: 45,
      Bakery: 30,
      'Canned Food': 58,
      'Soft Drinks': 83,
      Staples: 54,
      Sweets: 28,
      Toiletries: 29
    }), {
      "description": 'least Popular Category',
      "product": 'Sweets',
      "quantity": 28
    });
  });
  it('should return the most profitable category ', function() {
    assert.deepEqual(products.getMostProfitableCategory({
      Dairy: 371,
      Fruit: 31.5,
      Bakery: 69.9,
      'Canned Food': 150.14,
      'Soft Drinks': 212.26,
      Staples: 231,
      Sweets: 0,
      Toiletries: 157
    }), {
      "description": 'most Profitable Category',
      "product": 'Dairy',
      "prof": 371
    });
  });

});
