function calcFunc() {
  const num = fetchValue('num');
  const exponent = fetchValue('exponent');

  console.log('The number ' + num + ' to the power of ' + exponent + ' is:');
  console.log(calcPower(num, exponent));
}

// Put your code here
function fetchValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

function calcPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / base ** Math.abs(exponent);
  } else {
    return base ** exponent;
  }
}
