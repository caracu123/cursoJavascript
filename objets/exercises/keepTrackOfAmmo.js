/*
in a game a user has a weapon with a specific ammo count. Write a code that represents
how the user interacts with the weapon. The player needs to be able to:

- name the weapon ✓
- see max ammo ✓
- see damage per ammo ✓
- see current ammo ✓
- shoot a specific number of bullets ✓
- reload weapon to full capacity ✓
- print out how much dmg the remaining ammo can do (30 dmg for 3/5 bullets with 
  10dmg each) ✓
- visualize the current ammo (like this: [|||  ] 3/5) ✓
*/
const weapon = {
  weaponName: 'souleater',
  maxAmmo: 15,
  damagePerAmmo: 100,
  currentAmmo: 10,
  shoot: function (ammoCount) {
    // shoot requested bullets if enough are available
    if (ammoCount <= this.currentAmmo) {
      this.currentAmmo -= ammoCount;
      console.log(`Shooting ${ammoCount} ammo,`, `PEW!!!`.repeat(ammoCount));
    }
    // if not enough bullets shoot as much as we can
    else if (ammoCount > this.currentAmmo && this.currentAmmo !== 0) {
      console.log(`Shooting ${this.currentAmmo} ammo,`, `PEW!!!`.repeat(this.currentAmmo));
      this.currentAmmo = 0;
    }
    // if no bullets request reload
    else console.log("You don't have enough bullets. Reload.")
  },
  // reload ammo
  reload: function () {
    console.log("Reloading, don't shoot please :)");
    this.currentAmmo = this.maxAmmo;
  },
  // dmg in magazine function
  dmgLeft: function () {
    console.log(`Damage remaining: ${this.currentAmmo*this.damagePerAmmo}`);
  },
  // visualize magazine bullets
  magazine: function () {
    let mag = '';
    // remaining bullets
    for (let i = 0; i < this.currentAmmo; i++) {
      mag += '0';
    }
    // missing bullets
    for (let i = 0; i < this.maxAmmo - this.currentAmmo; i++) {
      mag += '-';
    }
    console.log(`Magazine: `, mag);
  },
}
// print weapon
console.log(weapon);
weapon.magazine();
weapon.dmgLeft();
// shoot 5 times
weapon.shoot(5);
weapon.magazine();
weapon.dmgLeft();
// reload
weapon.reload();
weapon.magazine();
weapon.dmgLeft();
// shoot 100 times
weapon.shoot(100);
weapon.magazine();
weapon.dmgLeft();
// shoot 1 time
weapon.shoot(1);
weapon.magazine();
weapon.dmgLeft();