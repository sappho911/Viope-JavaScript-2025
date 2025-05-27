const pete = {
  firstname: 'Pete',
  fullname: function () {
    return `Pete Programmer`;
  },
  age: 20,
};

const cara = {
  firstname: 'Cara',
  fullname: function () {
    return `Cara Coder`;
  },
  age: 32,
};

console.log('Name: ' + pete.fullname() + '\tAge:' + pete.age);
console.log('Name: ' + cara.fullname() + '\tAge:' + cara.age);

console.log(
  cara.firstname +
    ' is ' +
    (cara.age - pete.age) +
    ' years older than ' +
    pete.firstname
);
