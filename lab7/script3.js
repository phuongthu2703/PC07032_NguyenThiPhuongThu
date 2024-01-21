//   LAB7.3:
  // Contructor function cho đối tượng ô tô (Car)
  function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Phương thức "accelerate" của đối tượng ô tô (Car)
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
  };
  
  // Phương thức "brake" của đối tượng ô tô (Car)
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
  };
  
  // Contructor function cho đối tượng ô tô điện (ElectricCar)
  function ElectricCar(make, speed, charge) {
    // Kế thừa từ Car
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  // Kế thừa prototype của Car
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // Phương thức "chargeBattery" của đối tượng ô tô điện (ElectricCar)
  ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}'s battery charged to ${this.charge}%`);
  };
  
  // Override phương thức "accelerate" của đối tượng ô tô điện (ElectricCar)
  ElectricCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Khởi tạo đối tượng ElectricCar
  const tesla = new ElectricCar('Tesla', 120, 23);
  
  // Hiển thị thông tin ban đầu
  console.log(`${tesla.make} is running at ${tesla.speed} km/h with a charge of ${tesla.charge}%`);
  
  // Thực hiện các phương thức và in ra kết quả
  tesla.accelerate();
  tesla.brake();
  tesla.chargeBattery(90);
  