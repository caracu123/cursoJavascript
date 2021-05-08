const fighters = ['mage', 'warrior', 'king', 'trusty steed'];
console.log('STARTING TEAM:', fighters);
//1. remove trusty steed and add a wizard and a warlock in its place
fighters.splice(-1, 1, 'wizard', 'warlock');
console.log('1:', fighters);
//2. remove king and put queen in his place.
fighters.splice(2, 1, 'Queen Elisabeth');
console.log('2:', fighters);
//3. kill the first 3 fighters. create a new array with the remainder fighters. 
//(use splice and slice).
const deadFighters = fighters.splice(0, 3);
const remainingFighters = fighters.slice();
console.log('3:', remainingFighters);
//4. add 2 peasants to the front and 3 to the back of the remaining fighters.
remainingFighters.splice(0, 0, 'peasant 1', 'peasant 2');
for (let i = 3; i <= 5; i++){
  remainingFighters.push(`peasent ${i}`);
}
console.log('4:', remainingFighters);