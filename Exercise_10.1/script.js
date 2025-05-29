'use strict';

var store = {};

shop.cart = (function () {
  var products = [];
  function addProduct(productName) {
    if (!products[productName]) {
      // If the product is not added into the shopping cart, add it there.
      products[Productname] = 0;
    }
    // Raise the number of products by one
    products[productName]++;
  }

  function totalProducts() {
    var amount = 0;
    for (var productName in products) {
      amount += products[Productname];
    }
    return amount;
  }

  // interface
  return {
    add: addProduct,
    productAmount: productTotal,
  };
})();

// IIFE function
(function () {
  // statements…
})();
