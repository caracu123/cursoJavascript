/*
1.
user will give you a string, each user starts out with 0 points.
if user gave us a string that starts with a ?, we will do some more
tests to see how many points they'll win (based on other things in 
their string). If user's input does not start with ?, they lose instantly.

2.
If the second character is a '!' give the user 2 points, if it's a '%' give 
the user 3 points. Otherwise the user gets 1 point.

3.
if user gave a % in part 2, award user a point for each character in their 
entire string.

4.
print out the points count.
*/

let points = 0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insert String (special characters are more juicy):\n', (answer) => {
  // 1. testing first character
  if (answer[0] === `?`) {
    // 2. testing second character
    if (answer[1] === `!`) {
      points += 2;
    }
    else if (answer[1] === `%`){
      points += 3;
      // 3. award point for each character
      points += answer.length;
    }
    // 2. award 1 point
    else {
      points += 1;
    }
    
  }
  // 4. finish game.
  console.log(`GAME OVER.\nTotal Score: ${points}`);
  rl.close();
});