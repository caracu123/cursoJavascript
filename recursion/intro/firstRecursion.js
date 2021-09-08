/* recursive functions are functions that call themselves.
The next function will print out all of the whole numbers between
the first argument and 0

10 => 10 9 8 7 6 5 4 3 2 1 0
*/

function printDownto0 (wholeNumber) {
  console.log(wholeNumber);
  
  // decrease value of 1 for next call
  wholeNumber -=1;
  // call again if wholeNumber is >= 0
  if (wholeNumber >= 0) {
    printDownto0(wholeNumber);
  }
}
printDownto0 (10);