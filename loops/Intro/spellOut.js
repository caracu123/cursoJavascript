// this program will spell out a string character by character
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insert String:', (answer) => {
  for(let i=0; i < answer.length; i++){
    let char = answer[i];
    if (char === ` `){
      break;
    }
    console.log(char);
  }
  rl.close();
});