// write a program that says "YUM" if your favourite ice cream flavour is chocolate
// or vanilla and "EWW" if its sth else.

const flavour1 = `chocolate`;
const flavour2 = `vanilla`;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your favourite ice cream flavour? \n', (answer) => {
  const lowerAnswer = answer.toLocaleLowerCase()
   if (lowerAnswer.toLowerCase() === flavour1 || lowerAnswer.toLocaleLowerCase() === flavour2){
     console.log(`YUM`);
   }
   else {
     console.log(`EWW`);
   }

  rl.close();
});