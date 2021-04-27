/*
write a program that counts backwards from 35 to -22 but only counts every 18th number
*/

for (let i = 35; i >= -22; i -= 18) {
  console.log(i);
}
console.log(`End of FOR loop`);

let j = 35
while (j >= -22) {
  console.log(j);
  j -= 18;
}
console.log(`End of WHILE loop`);