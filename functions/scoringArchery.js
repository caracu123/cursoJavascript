/*
in an archery game, an archer hits X targets, and their score is calculated
as 1 + 2 + 3 + ... +(x-1) + x. We want to write a function to calculate the
archer's score.
*/

// this function calculates an archers score
function calculateArcherScore (hits = 0) {
  let sum = 0;
  for (let i = 1; i <= hits; i++) {
    sum += i;
  }
  return sum;
}

const scoreFrom10Hits = calculateArcherScore(10);
console.log(scoreFrom10Hits);