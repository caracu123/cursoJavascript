// write a program to sum up all the numbers in an array
const numbers = [1, 2, 3, 4, 7, 22, -55, 103];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);