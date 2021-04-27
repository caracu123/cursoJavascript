/*
iterate the string and grab every 3rd character. 
store each of these characters in an output string using string concatenation.
stop once you have collected 15 characters.
*/

const input = 'elephant giraffe pony seabass anaconda china lettuce hamburger french';
//             ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^                                     
console.log(`FOR LOOP`)
let output = ``;
for (let i = 0; i < 45; i += 3) {
  output += input[i];
}
console.log(output);

console.log(`\nWHILE LOOP`)
let output1 = ``;
let i = 0;
while (output1.length < 15) {
  output1 += input[i];
  i += 3;
}
console.log(output1);