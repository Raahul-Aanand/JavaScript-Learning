//constructor function is like blueprint.
//it helps in creating multiple object that share same structure and behaviour

//example

function house(color, rooms) {
  this.color = color;
  this.rooms = rooms;
  this.isOccupied = false;

  this.displayInfo = function () {
    console.log(`This ${this.color} house has ${this.rooms} rooms`);
  };

  this.occupy = function () {
    this.isOccupied = true;
    console.log("House is now occupied");
  };
}

//creating house objects using the constructor function
const house1 = new house("blue", 4);
const house2 = new house("red", 6);

house1.displayInfo();
house2.displayInfo();

console.log(house1.isOccupied);
console.log(house2.color);
