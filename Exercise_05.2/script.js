function calcSquare() {
  const num = document.querySelector('#num').value;
  const result = num * num;

  document.querySelector(
    '#result'
  ).innerHTML = `The square of ${num} is ${result}`;
}
