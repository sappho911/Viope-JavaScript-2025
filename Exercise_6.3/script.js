var array1 = ['first', 'second'];
var array2 = ['third', 'fourth'];

function popAndShift() {
  console.log(`First array: ${array1}`);
  console.log(`Second array: ${array2}`);

  let turn = true;

  while (array2.length) {
    array1.push(turn ? array2.pop() : array2.shift());
    turn = !turn;
  }

  console.log(`Resulting array: ${array1}`);
}
