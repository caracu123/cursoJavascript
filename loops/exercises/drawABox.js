/*
the user will give us a number like 3 and we will draw something like this
xxx
x x
xxx
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('I can draw boxes, give me a number: ', (answer) => {
  let number = +answer;
  console.log(`Box dimension: ${number}`)
  // do this if number grater than 1
  if (number > 1) {

    //draw top
    console.log(`x`.repeat(number));
  
    //hollow rows
    const hollowRows = number - 2;
    for (let i = 0; i < hollowRows; i++) {
      console.log(`x` + ` `.repeat(hollowRows) + `x`);
    }
  
    //draw bottom
    console.log(`x`.repeat(number));
  }
  else {
    console.log(`x`);
  }
  rl.close();
});