/* Ask user for number input. if their input is not a number, tell 
them. Otherwise print out the input*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insert number: ', (answer) => {
    // convert user's input to number
    numberAnswer = Number(answer);
    if (isNaN(numberAnswer)) {
        console.log (`Thats not a number.`);
                
    }
    else {
        console.log(`wow ${numberAnswer} is a great number`);
    }

  rl.close();
});