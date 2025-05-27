const arr = [];
let sum = 0;

function addNumber() {
  const num = parseInt(document.querySelector('#num').value);
  arr.push(num);
}

function printInfo() {
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  const avg = sum / arr.length;

  console.log(`The array has ${arr.length} elements.`);
  console.log(`The average of the values is ${avg}`);
}
