/* 
supose we work on a restaurant and we have an array of items that
represent a tray of food. We need to check if the tray of food
has pizza in it.
*/

// some code that checks wether or not the tray has pizza in it.
function hasPizza (foodTray) {
  console.log(foodTray);
  return foodTray.indexOf('pizza') !== -1;
}

// create a food tray
const foodTray = ['pizza', 'swordfis', 'candy cane', 'soda'];
console.log(`Food tray has pizza: ${hasPizza(foodTray)}`);

const diffFoodTray = ['soda', 'chocolate'];
console.log(`Diff food tray has pizza: ${hasPizza(diffFoodTray)}`);

