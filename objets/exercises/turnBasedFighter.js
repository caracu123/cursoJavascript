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
var playerDMG = +readlineSync.question('Insert your Damage per Hit : ');
var enemyName = readlineSync.question("Choose your enemy's name: ");

var player = {
  name: playerName,
  hp: playerHP,
  damage: playerDMG,
}

var enemy = {
  name: enemyName,
  
}