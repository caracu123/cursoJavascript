// functions can be used with other functions, for ex. one function can call
// another function.

// this function adds 2 numbers
function add2Numbers (a, b) {
  return a + b;
}
// this function multiplies 2 numbers
function multiply2Numbers (a, b) {
  return a * b;
}
// this function prints out the result of adding 2 numbers and another result
// of multiplying those 2 numbers
function addAndMultiply2Numbers (a, b) {
  // console.log(add2Numbers(a, b));
  // console.log(multiply2Numbers(a, b));
  let allTogether = `${add2Numbers(a, b)}, ${multiply2Numbers(a, b)}`;
  return allTogether;
}
// add
console.log(add2Numbers(100, 200));
// multiply
console.log(multiply2Numbers(7, 7));
// add and multiply
console.log(addAndMultiply2Numbers(4, 3));