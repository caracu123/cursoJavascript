/*
write a program that countsw backwards from 10 to 0
*/
let output = ''
let count = 10;
while (count >= 0) {
  output += count + ', ';
  count -= 1;  
}
console.log(output)