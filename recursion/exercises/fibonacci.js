/*
given a number n, can you implement an iterative solution to calculate
fibonacci number n? assume the following numbers indexing
0: 0
1: 1
2: 1
3: 2
4: 3
5: 5
6: 8
*/

function fibonacci (n) {
  let knownValues = {
    0: 0,
    1: 1,
    2: 1,
  }
  // calculate fibonacci number for n
  for (let i = 2; i <= n; i++) {
    knownValues[i] = knownValues[i - 1] + knownValues [i - 2];
  }
  // return the requested value and store it in a variable
  return knownValues[n];
}
console.log(fibonacci(8));