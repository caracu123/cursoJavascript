// https://www.npmjs.com/package/readline-sync

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

// ask user to guess a certain number of times
const maxGuesses = 3;
let userGuessesRemaining = maxGuesses;

//loop until game is over
while (userGuessesRemaining > 0) {
  console.log(`Guesses remaining: ${userGuessesRemaining}`);

  // ask the user for their next move
  var nextMove = readlineSync.question(
    'Enter "row" "column" (like: 3 2): '
    ).split(" ");
  
  // extract guesses to index arrays  
  let rowGuess = +nextMove[0];
  let columnGuess = +nextMove[1];

  // mark the users guess on the board
  board[rowGuess]
  // print out board row by row
  for(let i = 0; i < rowCount; i++){
    console.log(board[i]);
  }

  // turn is over, decrement guess
  userGuessesRemaining--;
}