const readlineSync = require('readline-sync');
 
// calculate the 9th fibonacci number
const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // default behaviour
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Ask user which fibonacci number they want
const whichFib = +readlineSync.question(
  'Which fibonacci number do you request?: '
  );

// reject invalid input
if (
  // test for NaN
  isNaN(whichFib) || 
  // test for non-number type
  typeof(whichFib) !== 'number' || 
  // test for negative numbers
  whichFib < 0 || 
  // test for non-whole numbers
  Math.floor(whichFib) !== whichFib
  ) {
  console.log(`get outta here with that terrible number ${whichFib}.`);
  return;
}

// give user fibonacci number
else {
  console.log(`Fibonacci Number ${whichFib}: ${fibonacci(whichFib)}`);
}

