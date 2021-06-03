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
THEN

iterate over each key and reasign the value for that key to be something storing the following
information (objects):
- is the number  version of the key even?
- remainder when dividing the number by 10
- square of the number

*/
// code to get user imput
var readlineSync = require('readline-sync');

// create object
var numbers = {};

// ask for input
var lowNumber = +readlineSync.question('Insert first number: ');
var highNumber = +readlineSync.question('Insert second number: ');

// check if even function
let isEven = function (num) {
  if (num % 2 === 0) return 'EVEN';
  else return 'ODD';
}

// loop and fill the empty object
for (let i = lowNumber; i <= highNumber; i++) {
    numbers[i] = String(i);  
};
console.log(numbers);

for (key in numbers) {
  const numberVersionOfKey = +key;
  numbers[key] = {
    even: isEven(numberVersionOfKey),
    remainderOf10: numberVersionOfKey % 10,
    square: numberVersionOfKey ** 2,
  };
}
console.log(numbers);