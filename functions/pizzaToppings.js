/*
We are at a pizza store and we need to put different toppings on pizzas
*/

// put pepperoni on pizza
function addPepperoni (pizaString) {
  return pizaString + ' with pepperoni';
}
// console.log(addPepperoni('regular pizza'));

// put extra cheese on pizza
function addExtraCheese (piza) {
  return piza + ' +2x cheese'
}
// console.log(addExtraCheese('large pizza'))

// makes base pizza before toppings
function makePizzaWithSize (size) {
  return `${size} pizza`;
}
// console.log(makePizzaWithSize('small'));

// make pizza with size and topping
function makePizza (sizeString, toppingFunction) {
  // make pizza with size
  let pizza = makePizzaWithSize(sizeString);
  // add topping
  pizza = toppingFunction(pizza);
  return pizza;
}
console.log(makePizza('medium', addPepperoni));