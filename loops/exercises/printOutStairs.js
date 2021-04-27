/*
print out a specific number of stairs cases.
*/

for (let i = 0; i < 5; i++) {
  // console.log(`-`.repeat(i));
  for (let j = 0; j <= 20; j = j + 5) {
    console.log(`-`.repeat(j))
  }
  for (let k = 15; k >= 0; k = k -5) {
    console.log(`-`.repeat(k))
  }
}
/*

*/