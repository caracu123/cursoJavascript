/*
write a function that prints both worlds and then combines them like this (don't modify original worlds):

world 1: [
  [' ', ' '],
  [' '],
  [' ', ' ', ' '],
]
world 2: [
  [' ', ' ', ' ', ' '],
  [' ', ' '],
  [' ', ' ', ' '],
]
returns [
  [' ', ' '],
  [' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' '],
  [' ', ' ', ' '],
]
*/
const world1 = [
  [' ', ' '],
  [' '],
  [' ', ' ', ' '],
];
const world2 = [
  [' ', ' ', ' ', ' '],
  [' ', ' '],
  [' ', ' ', ' '],
];
// print world function
const printWorld = (world) => {
  for (let i = 0; i < world.length; i++) {
    console.log(world[i]);
  }
}
// make copy of world 1
const w1Copy = world1.slice();
const w2Copy = world2.slice();
// combine worlds function
function combineWorlds (w1, w2) {
  // add copy of w2 to copy of w1
  for (let i = 0; i < w2.length; i++) {
    w1.push(w2[i]);
  }
return w1;
}
// store new world in variable
const newWorld = combineWorlds(w1Copy, w2Copy);

// print results
console.log(`world1: `)
printWorld(world1);
console.log(`world2: `)
printWorld(world2);
console.log(`combined worlds: `)
printWorld(newWorld);
console.log('---------------------------')

// change newWorld to test if w1 and w2 are untouched
newWorld[2][2] = 'D';

// print results
console.log(`world1: `)
printWorld(world1);
console.log(`world2: `)
printWorld(world2);
console.log(`combined worlds: `)
printWorld(newWorld);