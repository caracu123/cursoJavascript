// dragon stats
const dragonHealth = 100;

//bazooka stats
const shot1Damage = 25;
const shot2Damage = 50;
const shot3Damage = 10;
const totalDamage = shot1Damage + shot2Damage + shot3Damage;

console.log(`Remaining health: ${dragonHealth - totalDamage}`)
console.log(`the dragon has been beaten ${dragonHealth - totalDamage <= 0}`)