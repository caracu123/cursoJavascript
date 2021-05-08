// include code to get user imput
var readlineSync = require('readline-sync');

// assume user wishes to play
let userWishesToContinue = true;

// loop until ser wishes to stop
while(userWishesToContinue){
  // ask user if continue
  var userInput = readlineSync.question(
    'Wanna continue?'
  );
  //calculate result from input
  if (userInput !== 'yes'){
    userWishesToContinue = false;
  }
}
