// terminal input
var readlineSync = require('readline-sync');

class TicTacToe {
  constructor(empty) {
    if (empty === '') {
      empty = ' ';
    }

    this.empty = empty;

    this.board = [
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty],
    ];
  }
  // getter for empty spaces on board
  get emptySpaces() {
    let spaces = 0;
    // iterate over each row
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      // iterate over each column in the row
      for (let j = 0; j < row.length; j++) {
        const columnVal = row[j];

        // count empty spaces
        if (columnVal === this.empty) spaces++;
      }
    }
    return spaces;
  }

  // print out board so it isn't flat
  printBoard() {
    console.log('\nBoard:')
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i]);
    }
  }

  // randomly select empty space on board
  randomlySelectOpenBoardSpace() {
    let emptySpaces = [];
    // scan board to collect all empty spaces
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        
      }
    }
  }

  // allow player to mark the board at a specific position
  takeTurn(mark, row, column) {
    if (this.board[row][column] === this.empty) {
      this.board[row][column] = mark;
    }
  }

  whoIsWinner() {
    let winner = null;

    // /////////////////////
    // rows
    // /////////////////////
    // check for winners in rows
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      // check if 3 values are present in this row
      winner = are3SameValuesPresent(row);
      if (winner !== null) return winner;
    }


    // /////////////////////
    // diagonals
    // /////////////////////
    // check if there is a winner along the diagonals
    // south east
    const southEastDiagonal = [
      this.board[0][0], this.board[1][1], this.board[2][2]
    ];
    winner = are3SameValuesPresent(southEastDiagonal);
    if (winner !== null) return winner;

    // north east
    const northEastDiagonal = [
      this.board[2][0], this.board[1][1], this.board[0][2]
    ]
    winner = are3SameValuesPresent(northEastDiagonal);
    if (winner !== null) return winner;

    // /////////////////////
    // columns
    // /////////////////////
    // check the columns
    for (let i = 0; i < 3; i++) {
      const column = [];
      for (let j = 0; j < 3; j++) {
        column.push(this.board[j][i]);
      }
      // check if winner from this column
      winner = are3SameValuesPresent(column);
      if (winner !== null) return winner;      
    }

    // if we get to here nobody won
    return 'Nobody';
  }
}

// determine whether 3 x's or 3 o's are present in a 3 element array
const are3SameValuesPresent = arr => {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'X') xCount++;
    else if (arr[i] === 'O') oCount++;
  }

  // check if anybody has won
  if (xCount === 3) return 'X';
  else if (oCount === 3) return 'O';

  return null;
}

// ask user for empty space character
let emptyChar = readlineSync.question(
  'Insert empty space character: '
);

// create new board using class
const newGame = new TicTacToe(emptyChar);
newGame.printBoard();
console.log(`Spaces remaining: ${newGame.emptySpaces}`);

// test board
// for (let i = 0; i < 3; i++) {
//   newGame.takeTurn("O", 2, i);
//   newGame.printBoard();
//   console.log(`Winner: ${newGame.whoIsWinner()}`);
// }

// test southEastDiagonal
// for (let i = 0; i < 3; i++) {
//   newGame.takeTurn("O", i, i);
//   newGame.printBoard();
//   console.log(`Winner: ${newGame.whoIsWinner()}`);
// }

// test northEastDiagonal
// for (let i = 0; i < 3; i++) {
//   newGame.takeTurn("O", 2-i, i);
//   newGame.printBoard();
//   console.log(`Winner: ${newGame.whoIsWinner()}`);
// }

// test columns
for (let i = 0; i < 3; i++) {
  newGame.takeTurn("X", i, 0);
  newGame.printBoard();
  console.log(`Winner: ${newGame.whoIsWinner()}`);
}