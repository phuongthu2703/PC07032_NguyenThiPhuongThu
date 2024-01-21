
  // LAB7.5
  // Car class
  class CarCl {
    // 1) Public fields
    speed;
  
    // Constructor
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // 3) Public methods
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
      return this;
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
      return this;
    }
  }
  
  // ElectricCar class extends CarCl
  class EVCL extends CarCl {
    // 2) Private fields
    #charge;
  
    // Constructor
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    // 3) Public methods
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this;
    }
  
    // New method for LAB7.5
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make}'s battery charged to ${this.#charge}%`);
      return this;
    }
  }
  
  // Test case
  const rivian = new EVCL('Rivian', 120, 23);
  console.log(rivian);
  rivian.accelerate().chargeBattery(90).brake();
  console.log(rivian);
  