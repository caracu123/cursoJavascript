// write a program that counts from 0 to 7 but skips all the numbers 
// between 3 and 5
for (let i = 0; i <= 7; i++) {
  if (i >= 3 && i <= 5){
    continue;
  }
  console.log(i);
}
