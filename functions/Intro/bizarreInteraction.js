/*
some guy in the street is going to give us 5 dollars for a random item
from our bag. We will take all our items and put it on a table in front of him.
items on the left are the least valuable and items on the right are the most 
valuable.
However this guy is looking for a particular item and if he sees it he will
take it, no matter the value. If he doesn't find what he's looking for he
will just take the most valuable (to the right).
*/

function getWeirdGuysChoice (items, specialItem) {
  // iterate over the items and look for the item he wants
  for (let i = 0; i < items.length; i++) {
    // check to see if he's looking at the item he wants
    if (items[i] === specialItem) {
      return items[i];
    }
  }
  // he didn't find what he was looking for, so he takes the most valuable
  return items[items.length -1];
}
console.log(getWeirdGuysChoice(['cap', 'iphone', 'engagement ring'], 'cap'));