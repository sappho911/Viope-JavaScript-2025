// Example output:
// Array has strings. Combining words:
// The elements of this array form a sentence
// Array has only numbers. Calculating sum:
// 143
// Array has strings. Combining words:
// 5 times 3 is 15

const array1 = ['The', 'elements', 'of', 'this array', 'form', 'a sentence'];
const array2 = [3, 5, 7, 8, 9, 11, 13, 15, 16, 17, 19, 20];
const array3 = [5, 'times', 3, 'is', 15];

function someFunction(arr, f1, f2, f3) {
  if (!f1(arr)) {
    console.log(f2(arr));
  } else {
    console.log(f3(arr));
  }
}

// console.log(array2.every(n => !isNaN(n)));

function checkFunc(arr) {
  let isNumbers = arr.every(n => !isNaN(n));

  // another way using Ternary operation
  isNumbers
    ? console.log('Array has only numbers. Calculating sum:')
    : console.log('Array has strings. Combining words:');

  // if (isNumbers) {
  //   console.log('Array has only numbers. Calculating sum:');
  // } else {
  //   console.log('Array has strings. Combining words:');
  // }
  return isNumbers;
}

const combineFunc = arr => arr.map(sentence => sentence).join(' ') + ' ';

const sumFunc = arr => arr.reduce((acc, num) => acc + num, 0);

someFunction(array1, checkFunc, combineFunc, sumFunc);
someFunction(array2, checkFunc, combineFunc, sumFunc);
someFunction(array3, checkFunc, combineFunc, sumFunc);
