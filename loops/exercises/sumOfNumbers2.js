const max = 3;
let sum = 0;
for (let curr = 0; curr <= max; curr++){
  sum += curr;
  console.log(`the current value of sum is ${sum}, and curr is ${curr}`);
}
console.log(`-----------------------`);
console.log(`Final sum from numbers between 0 and ${max} is: ${sum}`);