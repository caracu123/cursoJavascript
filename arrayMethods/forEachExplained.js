// we will store the array in a variable so we can check if its the same as the "array" variable.
let someArrayHere = ['cat', 'dog', 'pigeons', 'giant squid'];
someArrayHere.forEach((currentElement, index, array) => {
  console.log(currentElement, index, array, array === someArrayHere);
});

// inline function breakdown
function doAnything (argument1) {
  console.log(argument1);
}
// this is the same as this
const doAnything1 = (argument1) => {
  console.log(argument1);
}