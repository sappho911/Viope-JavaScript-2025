function checkAge() {
  var age = document.getElementById('age').value;

  // Put your code here
  console.log('Input age: ' + age);

  if (age >= 18) {
    console.log('The user is an adult.');
  } else if (age > 0 && age < 18) {
    console.log('The user is not yet an adult.');
  } else {
    console.log('Invalid input!');
  }
}
