//write a program that prints out the following
/*
a ===
a 0
a 1
a 2
---------
b ===
b 1
b 2
---------
*/

const characters = `ab`
// iterate over each character
for (let i = 0; i < characters.length; i++) {
  let currCharr = characters[i];
  // print current character
  console.log(`${currCharr} ===`)
  // iterate over 0, 1, 2
  for(let j = 0; j < 3; j++){
    console.log(`${currCharr} ${j}`)
  }
  // print separator
  console.log(`----------------`)
}