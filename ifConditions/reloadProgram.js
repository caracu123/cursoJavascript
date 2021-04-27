// write a program that prints out 'RELOA' if we're out of ammo and otherwise
// just prints out however much ammo we have left.

let ammo = 0;
const maxAmmo = 50;

if (ammo > 0) {
    console.log(`${ammo} ammo left`);
    
}   
else {
    console.log(`RELOAD`);
    ammo = maxAmmo / 2;
    console.log(`Now ammo is ${ammo}`)
}