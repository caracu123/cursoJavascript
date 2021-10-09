let fibCount = 0;


const fibonacci = n => {
  fibCount ++;
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // default behaviour
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let cheapCount = 0;
let knownValues = {
  0: 0,
  1: 1,

}
const cheaperFibonacci = n => {
  cheapCount ++;
  // check if the value is known to skip recursion
  if (n in knownValues) {
    return knownValues[n];
  }

  // otherwise we don't know the value so we calculate it.
  const nFibonacciValue = cheaperFibonacci(n - 1) + cheaperFibonacci(n - 2);
  knownValues[n] = nFibonacciValue;
  return nFibonacciValue;
}

let n = 43;
// this will store the start time
let start = Date.now();

// show regular fibonacci results
console.log(`n = ${n}, Fib of n: ${fibonacci(n)}, count: ${fibCount}`);
// this will calculate how long it took
console.log(`Took ${(Date.now() - start) / 1000} seconds`)


// reset time counter
start = Date.now();
// shwo cheaper fibonacci results
console.log(`n = ${n}, Fib of n: ${cheaperFibonacci(n)}, count: ${cheapCount}`);
// this will calculate how long it took
console.log(`Took ${(Date.now() - start) / 1000} seconds`)