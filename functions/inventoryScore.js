/*
suppose we have a player in a game, and their inventory is stored in a string.
it will look something like this "gold coin | puppy | magic sword". our program
must measure how much the inventory is worth if they sell all items.

value of the items:
gold cup: 5
puppy: 4
magic sword: 10
tooth of a whale: 20
tentacle of the giant squid: 100
anything else: 1
*/

let inv = 'gold cup | puppy | magic sword | tooth of a whale | turd | ball | tentacle of the giant squid';

// function sellItems (items) {
const sellItems = (items) => {
  // split string into an array
  let arrayInv = items.split(' | ');
  // return variable
  let gold = 0;
  // loop through all items and value them
  for (let i = 0; i < arrayInv.length; i++) {
    const item = arrayInv[i];

    if (item === 'gold cup') gold += 5;
    else if (item === 'puppy') gold += 4;
    else if (item === 'magic sword') gold += 10;
    else if (item === 'tooth of a whale') gold += 20;
    else if (item === 'tentacle of the giant squid') gold += 100;
    else gold += 1;
  }
  return gold;
};
console.log(`Value of inventory: ${sellItems(inv)} coins.`);
console.log(inv);