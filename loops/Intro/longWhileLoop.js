/*
write a program that will print out numbers this way
0, 1, 2, 3, 4, 5, ...
and it will stop when exceeding 100 characters.
*/

let output = ``;
let i = 0;
const outputCharacterLimit = 100;
while (output.length < outputCharacterLimit) {
  output += i + ', ';
  i++;
}
console.log(output);
console.log(`Length: ${output.length}`);