let primeNumbers = 0;

nextPrime: for (let i = 2; i <= 60; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  primeNumbers++;
  console.log(i);
}
console.log('Total of prime numbers found: ' + primeNumbers);
