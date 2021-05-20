// write a program that prints out the location of the enemy in the world
/*
[
  [' ', ' '],
  [' ', ' ']
] => 1, 1
*/
const world = [];
const worldColumns = 5;
const worldRows = 5;

// create world function
for (let i = 0; i < worldRows; i++) {
  world.push(' '.repeat(worldColumns).split(''));
}
// print world function
const printWorld = (world) => {
  for (let i = 0; i < worldRows; i++) {
    console.log(world[i]);  
  }
}
// find enemy function
function findEnemy (world) {
  let enemyPosition = null;
  let count = 0;
  for (let i = 0; i < worldColumns; i++) {
    for (let j = 0; j < worldRows; j++){
      count ++;
      // if enemy found, store the position
      if (world[i][j] === 'X') {
        enemyPosition = [i, j];
        break;
      }
    }
    if (enemyPosition !== null) break;
  }
  console.log(`Number of checks: ${count}`);
  return [enemyPosition];
}
// create enemy at random position and insert in world
const enemyColumn = Math.floor(Math.random() * worldColumns);
const enemyRow = Math.floor(Math.random() * worldRows);
const enemyPosition = 'X';
world [enemyColumn][enemyRow] = enemyPosition;

printWorld(world);
console.log(`Enemy position (Row, Column): ${findEnemy(world)}`);