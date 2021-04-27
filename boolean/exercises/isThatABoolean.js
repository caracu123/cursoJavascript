/*
write a program that tests 3 different values and prints out whether or not they
are a boolean. if it is a boolean it should print out true and false if its not.
*/

let var1 = 123456;
let var2 = true;
let var3 = `boolean`;

console.log(`variable 1 is a boolean: ${typeof(var1) === 'boolean'}`);
console.log(`variable 2 is a boolean: ${typeof(var2) === 'boolean'}`);
console.log(`variable 3 is a boolean: ${typeof(var3) === 'boolean'}`);

console.log(`\n -------- \n`);

console.log(`variable 1 is a string: ${typeof(var1) === `string`}`);
console.log(`variable 2 is a string: ${typeof(var2) === `string`}`);
console.log(`variable 3 is a string: ${typeof(var3) === `string`}`);

console.log(`\n -------- \n`);

var1 = false;
var2 = 5;
var3 = true;

console.log(`variable 1 is a boolean: ${typeof(var1) === 'boolean'}`);
console.log(`variable 2 is a boolean: ${typeof(var2) === 'boolean'}`);
console.log(`variable 3 is a boolean: ${typeof(var3) === 'boolean'}`);

console.log(`\n--------\n`);

console.log(`variable 1 is a number: ${typeof(var1) === 'number'}`);
console.log(`variable 2 is a number: ${typeof(var2) === 'number'}`);
console.log(`variable 3 is a number: ${typeof(var3) === 'number'}`);