const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nInsert whole positive number:', (answer) => {
  //convert answer to numbers.
answer = +answer;
if (isNaN(answer)) {
  console.log(`That is not a number.`);
  }
else{  
  //store factorial here 
let factorial = answer;
let string = `\n${answer}! = `;
//main loop
while (answer >= 1) {
  //build up string
  string += `${answer}`;
  //string concatenation
  if (answer > 1){
    string += ` * `;
  }
  //string concatenation end
  else {
    string += ` = `;
  }
  //mathematic loop
  if (answer >= 2) {
    factorial = factorial * (answer -1);
  }
  answer--;  
}
console.log(string + factorial);
}

  rl.close();
});