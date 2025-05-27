'use strict';

let words = 'The value of this variable is ten automatically assigned';

function findTheNumber() {
  let whiteSpace = '';

  const position = words.search(/t+en/gi);

  const lastIndex = words.match(/t+en/gi).join('').length;

  let part = words.substring(position, position + lastIndex).toLowerCase();

  for (let i = 0; i < position; i++) {
    whiteSpace = whiteSpace + ' ';
  }

  const output = whiteSpace + part;
  console.log(words);
  console.log(output);
}

findTheNumber();
