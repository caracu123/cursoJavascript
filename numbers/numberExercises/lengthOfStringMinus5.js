// write a program that does the following:
/*
given a string, tell me the length of the string -5
examples: 
1. input 'abcd', output -1
2. input '?????????', output 4
*/

let string1 = 'abcd';
let string2 = '?'.repeat(9);

console.log(`The length of ${string1} -5 is: ${string1.length-5}`);
console.log(`The length of ${string2} -5 is: ${string2.length-5}`);