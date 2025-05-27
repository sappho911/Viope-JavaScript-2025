const sentence = '5om3 wr173 w0rd5 u51n9 numb3r5.';

function printDigits() {
  let digitsPatt = /\d/.test(sentence);

  if (digitsPatt) {
    const digits = sentence.match(/\d/g);
    console.log(digits);
  } else {
    console.log(`No digits!`);
  }
}

printDigits();
