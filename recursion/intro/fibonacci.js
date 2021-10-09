const readlineSync = require('readline-sync');
 
// calculate the 9th fibonacci number
const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // default behaviour
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
fibonacci(0) => 0
fibonacci(1) => 1
fibonacci(2) => 1
fibonacci(3) => 2
fibonacci(4) => 3
fibonacci(5) => 5
fibonacci(6) => 8

trace for fibonacci (6) (left call first)
  
  fibonacci (6) (=>8)
  n = 6
  return fibonacci (5) (=>5) + fibonacci (4) (=>3)

    fibonacci
    n = 5
    return fibonacci (4) (=>3) + fibonacci (3) (=>2)

      fibonacci
      n = 4
      return fibonacci (3) (=>2) + fibonacci (2) (=>1)

        fibonacci
        n = 3
        return fibonacci (2) (=>1)+ fibonacci (1) (=>1)

          fibonacci
          n = 2
          return fibonacci (1) (=>1) + fibonacci (0) (=>0)

            fibonacci
            n = 1
            return 1 (if condition)
*/

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