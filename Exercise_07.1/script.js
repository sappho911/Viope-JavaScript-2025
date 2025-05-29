function halve(num) {
  return num / 2;
}

function square(num) {
  return num * num;
}

function loop(loops, number, func) {
  if (loops < 1) {
    return 'There has to be at least 1 loop!';
  }

  for (let i = 0; i < loops; i++) {
    number = func(number);
  }
  return number;
}

console.log(halve(50));
console.log(loop(5, 200, halve));
console.log(loop(3, 5, square));
console.log(loop(-1, 99, halve));
