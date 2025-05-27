function greet() {
  console.log('Hi there!');
}

function addButton() {
  // Put your code here
  const button = document.createElement('button');

  button.innerHTML = 'Hello';
  button.id = 'createdButton';

  button.setAttribute('click', greet());

  document.body.appendChild(button);
}
