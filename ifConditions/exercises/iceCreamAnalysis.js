/*
write a program that does the following:
1. print out yum if favourite flavour is chocolate or vanilla
2. if your favourite ice cream flavour is strawberry, print out fruity
3. if your fav flavour is mint, print out how fresh
4.if its coffe, print out disgusting
5. otherwise, print out i didn't even know that was a flavour
*/

// flavours variables:
const flavour1 = `chocolate`;
const flavour2 = `vanilla`;
const flavour3 = `strawberry`; // fruity
const flavour4 = `mint`; // how fresh
const flavour5 = `coffee`; // disgusting

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your favourite ice cream flavour? \n', (answer) => {
  // convert answer to lower case:
  const lowerAnswer = answer.toLocaleLowerCase()
  // analize ice cream flavours:
  if (lowerAnswer === flavour1 || lowerAnswer === flavour2){
    console.log(`YUM`);
  }
  else if (lowerAnswer === flavour3) {
      console.log(`fruity :)`);       
  }
  else if (lowerAnswer === flavour4) {
      console.log(`how fresh`);
  }
  else if (lowerAnswer === flavour5) {
      console.log(`disgusting`);
  }
  else {
    console.log(`i didn't even know that was a flavour`);
  }

  rl.close();
});