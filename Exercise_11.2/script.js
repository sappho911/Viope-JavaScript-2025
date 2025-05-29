'use strict';

const sum = (...numbers) => {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(total);
};

sum(1, 4, 3, 8, 11);
sum(10);
