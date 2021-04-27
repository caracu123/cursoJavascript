// lets write a program that finds the index of an element if it's in 
// the array. if the element is NOT in the array, it will give us -1.
// the program will find the first occurrence of the element.

let fish = ['swordfish', 'whale', 'octopus', 'shark', 'squid', 'starfish'];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What fish are you looking for? ', (answer) => {
  //inform user we are searching
  console.log(`SEARCHING FOR ${answer.toUpperCase()}`);
  //convert to lowercase
  answer = answer.toLocaleLowerCase();
  let matchIndex = -1;
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === answer) {
      matchIndex = i;
      break;      
    }    
  }
  // print didnt find fish
  if (matchindex === -1) {
    console.log(`Apologies, we didn't find your fish ${answer}`);
  }
  else {
    console.log(`found your fish ${answer} at index ${matchIndex}`);
  }
  // INDEX OF method
  console.log (fish, answer, fish.indexOf(answer));
  rl.close();
});