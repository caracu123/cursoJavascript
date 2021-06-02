/*
write a program that starts with an empty object that will map numbers
to their string counterpart. like this => 1: '1'.
Take input from user for starting number and end number. Store in object 
every whole number from start to end. [low, high]
low = 6
high = 8
{
  6: '6',
  7: '7',
  8: '8'
}
*/
var readlineSync = require('readline-sync');
// create object
var numbers = {};
// ask for input
var lowNumber = readlineSync.question('Insert first number: ');
var highNumber = readlineSync.question('Insert second number: ');
// convert input to numbers
lowNumber = +lowNumber;
highNumber = +highNumber;
for (let i = lowNumber; i <= highNumber; i++) {
  numbers[i] = String(i)
}
// for (let key in numbers) {
//   numbers[key] = Number(key);
// }
console.log(numbers);