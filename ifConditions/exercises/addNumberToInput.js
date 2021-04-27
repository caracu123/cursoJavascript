// write a program that takes in a user's input and adds 55 to it

// refactor this program to add 55 if the user's number is even
// and 100 if it's odd.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insert number: ', (answer) => {
    // convert user's input to number
    numberAnswer = Number(answer);
    // test if answer is even/odd and add 55 or 100 for each case
    console.log(numberAnswer % 2 === 0 ? `${answer} + 55 = ${numberAnswer + 55}` : 
    `${answer} + 100 = ${numberAnswer + 100}`);

  rl.close();
});