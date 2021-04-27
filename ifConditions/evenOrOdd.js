// write a program that prints out "ODD!!" if a number is odd and "EVEN!!" if a
// number is even.
/*
var number = 2;

if (number % 2 === 0){
    console.log(`number is EVEN!!.`);
}
else {
    console.log(`number is ODD!!`);
}
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insert your number: ', (answer) => {
  
  if (answer % 2 === 0){
      console.log(`EVEN!!!`);
  }
  else {
      console.log(`ODD!!!`);
  };

  rl.close();
});