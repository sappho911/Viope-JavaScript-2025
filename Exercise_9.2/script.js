'use strict';

let sentence = 'This     sentence     has     too    many  spaces.';

function fixSentence() {
  sentence = sentence.replace(/\s+/g, ' ');

  sentence = sentence.replace(/\bhas\b/g, 'had');

  console.log(sentence);
}

fixSentence();
