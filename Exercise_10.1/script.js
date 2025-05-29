'use strict';

// // IIFE function
// (function () {
//   // statements…
// })();

const weekday = (function () {
  // prettier-ignore
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function count() {
    if (!names) return;
    return names.length;
  }

  function getDay(day) {
    return names[day];
    // more modern way to use at() method;
    // return names.at(day);
  }

  function getIndex(index) {
    return names.indexOf(index);
  }

  // interface
  return {
    count: count,
    name: getDay,
    number: getIndex,
  };
})();

let num = 0;

console.log('There are ' + weekday.count() + ' days in a week.');
console.log(
  'In programming, the index of ' +
    weekday.name(num) +
    ' tends to be ' +
    weekday.number(weekday.name(num)) +
    '.'
);
