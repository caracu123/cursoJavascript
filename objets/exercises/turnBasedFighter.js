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

var player = {
  name: playerName,
  hp: playerHP,
  damage: playerHP * 0.2,
};

var enemy = {
  name: enemyName,
  hp: playerHP * 1.5,
  damage: player.damage * 1.5,  
};

console.log();
console.log('This is your character: ', player);
console.log();
console.log('You need to defeat: ', enemy);
console.log();

// attack function
function attack (attacker, reciever) {
  let chance = Math.random();
  if (chance > 0.5) {
    reciever.hp -= attacker.damage;
    console.log(`You hit ${enemy.name} for ${attacker.damage} damage.`);
  }
  else console.log(`Attack missed, ${enemy.name} is too fast!`);
}

// super attack function
function superAttack (attacker, reciever) {
  let chance = Math.random();
  if (chance > 0.4) {
    damage = attacker.damage*2;
    reciever.hp -= damage;
    console.log(`You hit ${enemy.name} for ${damage}, but you also lost ${attacker.damage * 0.5} Health.`);
  }
  else console.log(`Super attack missed, you hurt yourself. -${attacker.damage * 0.5} health.`);
  attacker.hp -= attacker.damage *0.5;
}

// heal function
function heal (someone) {
  let heal = Math.random() * someone.damage;
  someone.hp += heal;
  console.log(`You healed yourself for ${heal}, refreshing.`);
}

// enemy attack function
function enemyAttack (player) {
  let chance = Math.random();
  if (chance > 0.5) {
    player.hp -= enemy.damage;
    console.log(`${enemy.name} hit you for ${enemy.damage}`)
  }
}

while (player.hp > 0 && enemy.hp > 0) {
  var playerAction = readlineSync.question(
    '"AT" to attack, \n"SA" for a Super Attack, \n"HE" to heal \nInsert Next Move: '
    );
}