var readlineSync = require('readline-sync');

// ask user for their player name
var userName = readlineSync.question('Enter player name: ');
console.log(`Welcome ${userName}!!`);

// make board for player
let board = [];
const rowCount = 3;
const columnCount = 3;
// add rows
for (let i=0; i < rowCount; i++){
  board.push([]);
  // add a column
 for (let j = 0; j < columnCount; j++) {
    board[i].push('?');
  }
}
// print out board row by row
for(let i = 0; i < rowCount; i++){
  console.log(board[i]);
}

// ask user to guess a certain number of times
const maxGuesses = 3;
let userGuessesRemaining = maxGuesses;

//loop until game is over
while (userGuessesRemaining > 0) {
  console.log(`Guesses remaining: ${userGuessesRemaining}`);

  // ask the user for their next move
  
  // turn is over, decrement guess
  userGuessesRemaining--;
}