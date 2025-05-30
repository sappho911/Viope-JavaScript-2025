'use strict';

// // IIFE function
// (function () {
//   // statements…
// })();

// Put your code here

// shop.customerRegistry.customerInfo(0);
// shop.customerRegistry.add('Pete', 'Programmer');
// shop.customerRegistry.add('Cara', 'Coder');
// shop.customerRegistry.customerList(1);
// shop.customerRegistry.add('Samuel', 'Scripter');
// shop.customerRegistry.add('Wendy', 'Webmaster');
// shop.customerRegistry.customerList();

//  EXAMPLE
var store = {};

store.cart = (function () {
  var products = [];
  function addProduct(productName) {
    if (!products[productName]) {
      // If the product is not added into the shopping cart, add it there.
      products[productName] = 0;
    }
    // Raise the number of products by one
    products[productName]++;
  }

  function totalProducts() {
    var amount = 0;
    for (var productName in products) {
      amount += products[productName];
    }
    return amount;
  }

  // interface
  return {
    add: addProduct,
    productAmount: totalProducts,
  };
})();

store.cart.add('keksi');
store.cart.add('keksi');
store.cart.add('apple');
console.log(store.cart.productAmount()); // 3
