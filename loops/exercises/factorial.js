/*
write a program that calculates the factorial for n, so long as n is a
whole positive number (n>0) in the following manner:
n! = n * 5 * 4 * 3 * 2 * 1 = (answer)
*/

//variables
let number = 9;
let factorial = number;
let string = ``;
//main loop
while (number >= 1) {
  //string concatenation
  if (number > 1){
    string += `${number} * `;
  }
  //string concatenation end
  else {
    string += `1 = `;
  }
  //mathematic loop
  if (number >= 2) {
    factorial = factorial * (number -1);
  }
  number--;  
}
console.log(string + factorial);