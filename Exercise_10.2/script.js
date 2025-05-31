'use strict';

// // IIFE function
// (function () {
//   // statements…
// })();

const shop = {};

shop.customerRegistry = (function () {
  let users = [];

  function add(firstname, lastname) {
    users.push({ firstname: firstname, lastname: lastname });
    console.log(`Added customer with ID  ${users.length - 1}`);
  }

  function customerInfo(id) {
    const userID = users.length;
    id < 0 || id >= userID ? console.log('Too high an ID value!') : '';
  }
  function customerList() {
    console.log('Listing all customers:');
    users.forEach(function (user, i) {
      console.log(i + ': ' + user.lastname + ' ' + user.firstname);
    });
  }

  return {
    add: add,
    customerInfo: customerInfo,
    customerList: customerList,
  };
})();

shop.customerRegistry.customerInfo(0);
shop.customerRegistry.add('Pete', 'Programmer');
shop.customerRegistry.add('Cara', 'Coder');
shop.customerRegistry.customerList(1);
shop.customerRegistry.add('Samuel', 'Scripter');
shop.customerRegistry.add('Wendy', 'Webmaster');
shop.customerRegistry.customerList();
