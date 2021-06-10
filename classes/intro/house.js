class House {
  constructor(bedroomCount, buildingMaterial, floorCount, price) {
    this.bedroomCount = bedroomCount;
    this.buildingMaterial = buildingMaterial;
    this.floorCount = floorCount;
    this.price = `$${price}.00`;
  }

  describe() {
    console.log(`This lovely ${this.bedroomCount} bedroom house, made out of ${this.buildingMaterial}, with ${this.floorCount} floor(s), is currently on the market for ${this.price}`);
  }
}

const house1 = new House(3, 'brick', 2, 500);
const house2 = new House(10, 'steel', 3, 501);

console.log(house1);
house1.describe();
console.log(house2);
house2.describe();