// write a program that tells the user "THAT'S NOT THE PASSWORD" if they guess wrong.
// if user guesses the correct pass, print out "ACCES GRANTED".

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('INSERT PASSWORD:' , (answer) => {
  
  if (answer === `santi`) {
      console.log(`ACCES GRANTED`);
  }
  else {
      console.log(`THAT'S NOT THE PASSWORD`);
}

  rl.close();
});