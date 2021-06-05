/*
ask for user information about their player and also info about the enemy they must fight.
Then we'll allow the player and the enemy to take turns atacking each other until one of 
them is dead.
*/

// code to get user imput
var readlineSync = require('readline-sync');

// ask for input
var playerName = readlineSync.question('Choose your name: ');
var playerHP = +readlineSync.question('Insert your Health Points : ');
var enemyName = readlineSync.question("Choose your enemy's name: ");

// create player object
var player = {
  name: playerName,
  hp: playerHP,
  damage: playerHP * 0.3,
};
//  create enemy object
var enemy = {
  name: enemyName,
  hp: playerHP * 1.2,
  damage: player.damage * 1.1,  
};

console.log();
console.log('---------------------------------------------------------');
console.log('This is your character: ', player);
console.log();
console.log('---------------------------------------------------------');
console.log('You need to defeat: ', enemy);
console.log();

// player attack function
function attack () {
  let chance = Math.random();
  if (chance > 0.3) {
    enemy.hp -= player.damage;
    console.log(`You hit ${enemy.name} for ${player.damage} damage.`);
  }
  else console.log(`Attack missed, ${enemy.name} is too fast!`);
}

// player super attack function
function superAttack () {
  let chance = Math.random();
  if (chance > 0.2) {
    damage = player.damage*2;
    enemy.hp -= damage;
    console.log(`You hit ${enemy.name} for ${damage}, but you also lost ${player.damage * 0.5} Health.`);
  }
  else console.log(`Super attack missed, you hurt yourself. -${player.damage * 0.5} Health.`);
  player.hp -= player.damage *0.5;
}

// heal function
function heal () {
  let heal = Math.random() * player.damage;
  player.hp += heal;
  console.log(`You healed yourself for ${heal}, refreshing.`);
}

// enemy attack function
function enemyAttack () {
  let chance = Math.random();
  if (chance > 0.3) {
    player.hp -= enemy.damage;
    console.log(`${enemy.name} attacked and hit you for ${enemy.damage}`)
  }
  else console.log(`${enemy.name} attacked and missed!`)
}

// enemy super attack function
function enemySuperAttack () {
  let chance = Math.random();
  if (chance > 0.2) {
    damage = enemy.damage*1.5;
    player.hp -= damage;
    enemy.hp -= enemy.damage *0.5;
    console.log(`${enemy.name} made a super attack and hit you for ${damage}, but also lost ${enemy.damage *0.5} Health.`);
  }
  else console.log(`${enemy.name} super attack missed, lucky you! ${enemy.name} lost ${enemy.damage*0.5} Health`)
}
// loop while both hp are > than 0
while (player.hp > 0 && enemy.hp > 0) {
  var playerAction = readlineSync.question(
    '"A" to attack, \n"S" for Super Attack, \n"H" to heal \n"FF" to give up, \nInsert Next Move: '
    ).toUpperCase();
  console.log();
  // player action
  if (playerAction === 'A') attack();
  else if (playerAction === 'S') superAttack();
  else if (playerAction === 'H') heal();
  else if (playerAction === 'FF') break;
  else console.log('Invalid input, try again.');
  console.log();
  
  // decide enemy movement
  let enemyMove = Math.random();
  if (enemyMove < 0.5) enemyAttack();
  else enemySuperAttack();
  console.log();
    console.log(player.name, player.hp);
  console.log();
  console.log(enemy.name, enemy.hp);
  console.log('---------------------------------------------------------');
  console.log();
  console.log();
  console.log();
  if (player.hp > 0 && enemy.hp < 0) console.log(`YOU WON, CONGRATS!!`);
  else if (player.hp < 0 && enemy.hp < 0) console.log(`It's a DRAW, well played.`)
  else console.log(`You lost HAHAHA!`);
}