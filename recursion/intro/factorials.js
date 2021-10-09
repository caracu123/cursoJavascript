/*
remember that a factorial for some number like 5 is just 5 * 4 * 3 * 2 * 1 = 5!

write a program that will compute a numbers factorial iteratively. then 
implement a recursive solution.
*/

// iterative solution
function factorial (n) {
  let result = 1;
  for (let i = n; i > 0; i--) result *= i;
  return result;
}
console.log(`iterative result: ${recursiveFactorial(5)}`)



// recursive solution
function recursiveFactorial (n) {
  if (n === 2) return n;
  return n * recursiveFactorial (n - 1);
}
/*
  recursiveFactorial(3)
    recursiveFactorial
    number = 3
    => 3 * recursiveFactorial(2)

      recursiveFactorial
      n = 2
      => 2 * recursiveFactorial(1)
      Here n is = 2 so it returns 2 and replaces "recursiveFactorial(2)"
*/

console.log(`recursive result: ${recursiveFactorial(5)}`)
