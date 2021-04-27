/*
write a program that sums up all the whole numbers between 0 and whatever number
u want. Sum all the numbers between 0 and n. N is an arbitrary number greater than 0.
make this an inclusive sum, meaning include 0 and the upper bound number.
*/

//this will be the current number
let curr = 0;
//upper bound
const max = 20;
//sum
let sum = 0;
//loop until we pass the max
while(curr <= max) {
  sum += curr; // sum = sum + curr
  //output sum so far
  console.log(`current number: ${curr}, sum (so far): ${sum}`);
  curr++;
}
console.log(`--------------`)
console.log(`final sum for numbers between 0 and ${max} is: ${sum}`);