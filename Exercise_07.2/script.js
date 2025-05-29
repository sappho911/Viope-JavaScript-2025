function loop(value, greater, reduce, print) {
  while (greater(value)) {
    print(value);
    value = reduce(value);
  }
}

const value = 3;

const greaterThanZero = function (n) {
  return n > 0;
};

const reduceOne = function (n) {
  return n - 1;
};

const printValue = function (n) {
  console.log(n);
};

loop(value, greaterThanZero, reduceOne, printValue);
