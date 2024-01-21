
// LAB7.1:
// 1. Sử dụng constructor function để khởi tạo đối tượng ô tô (Car)
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // 2. Phương thức "accelerate" để tăng speed
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
  };
  
  // 3. Phương thức "brake" giảm speed
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
  };
  
  // 4. Khởi tạo 2 đối tượng ô tô và thử nghiệm
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  console.log(`Ô tô 1: ${car1.make} đang chạy với tốc độ ${car1.speed} km/h`);
  console.log(`Ô tô 2: ${car2.make} đang chạy với tốc độ ${car2.speed} km/h`);
  
  // Thử nghiệm gọi các phương thức
  car1.accelerate(); // Speed of BMW after accelerating: 130 km/h
  car1.accelerate(); // Speed of BMW after accelerating: 140 km/h
  
  car2.brake(); // Speed of Mercedes after braking: 90 km/h
  car2.accelerate(); // Speed of Mercedes after accelerating: 100 km/h
  

// //   LAB7.2: 
// class Car {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
  
//     // Phương thức "accelerate" để tăng speed
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//     }
  
//     // Phương thức "brake" giảm speed
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
//     }
  
//     // Getter 'speedUS' trả về speed hiện tại với đơn vị mi/h
//     get speedUS() {
//       return this.speed / 1.6;
//     }
  
//     // Setter 'speedUS' để thay đổi tốc độ hiện tại tính bằng mi/h
//     set speedUS(newSpeedUS) {
//       this.speed = newSpeedUS * 1.6;
//     }
//   }
  
//   // Khởi tạo đối tượng ô tô (Car)
//   const fordCar = new Car('Ford', 120);
  
//   // Hiển thị thông tin ban đầu
//   console.log(`Car data: ${fordCar.make} is running at ${fordCar.speed} km/h`);
  
//   // Thực hiện các phương thức và getter/setter
//   fordCar.accelerate(); // Speed of Ford after accelerating: 130 km/h
//   console.log(`Speed of Ford in mi/h: ${fordCar.speedUS} mi/h`);
//   fordCar.speedUS = 75; // Setting new speed in mi/h
//   console.log(`New speed of Ford: ${fordCar.speed} km/h`);

  
// //   LAB7.3:
//   // Contructor function cho đối tượng ô tô (Car)
// function Car(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
  
//   // Phương thức "accelerate" của đối tượng ô tô (Car)
//   Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//   };
  
//   // Phương thức "brake" của đối tượng ô tô (Car)
//   Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
//   };
  
//   // Contructor function cho đối tượng ô tô điện (ElectricCar)
//   function ElectricCar(make, speed, charge) {
//     // Kế thừa từ Car
//     Car.call(this, make, speed);
//     this.charge = charge;
//   }
  
//   // Kế thừa prototype của Car
//   ElectricCar.prototype = Object.create(Car.prototype);
  
//   // Phương thức "chargeBattery" của đối tượng ô tô điện (ElectricCar)
//   ElectricCar.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//     console.log(`${this.make}'s battery charged to ${this.charge}%`);
//   };
  
//   // Override phương thức "accelerate" của đối tượng ô tô điện (ElectricCar)
//   ElectricCar.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
//   };
  
//   // Khởi tạo đối tượng ElectricCar
//   const tesla = new ElectricCar('Tesla', 120, 23);
  
//   // Hiển thị thông tin ban đầu
//   console.log(`${tesla.make} is running at ${tesla.speed} km/h with a charge of ${tesla.charge}%`);
  
//   // Thực hiện các phương thức và in ra kết quả
//   tesla.accelerate();
//   tesla.brake();
//   tesla.chargeBattery(90);
  

//   // LAB7.4
// class Account {
//     // 1) Public fields
//     locale = navigator.language;
  
//     // 2) Private fields
//     #movements = [];
//     #pin;
  
//     // Constructor
//     constructor(owner, currency, pin) {
//       this.owner = owner;
//       this.currency = currency;
//       this.#pin = pin;
//       console.log(`Thanks for opening an account, ${owner}`);
//     }
  
//     // 3) Public methods
//     getMovements() {
//       return this.#movements;
//     }
  
//     deposit(val) {
//       this.#movements.push(val);
//       return this;
//     }
  
//     withdraw(val) {
//       this.deposit(-val);
//       return this;
//     }
  
//     requestLoan(val) {
//       if (this._approveLoan(val)) {
//         this.deposit(val);
//         console.log(`Loan approved`);
//         return this;
//       }
//     }
  
//     // 4) Private methods
//     _approveLoan(val) {
//       return true;
//     }
  
//     // Static method
//     static helper() {
//       console.log('Helper');
//     }
//   }
  
//   // Create an account
//   const acc1 = new Account('Jonas', 'EUR', 1111);
//   acc1.deposit(250);
//   acc1.withdraw(140);
//   acc1.requestLoan(1000);
//   console.log(acc1.getMovements());
//   console.log(acc1);
  
//   // LAB7.5
//   // Car class
//   class CarCl {
//     // 1) Public fields
//     speed;
  
//     // Constructor
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
  
//     // 3) Public methods
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//       return this;
//     }
  
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
//       return this;
//     }
//   }
  
//   // ElectricCar class extends CarCl
//   class EVCL extends CarCl {
//     // 2) Private fields
//     #charge;
  
//     // Constructor
//     constructor(make, speed, charge) {
//       super(make, speed);
//       this.#charge = charge;
//     }
  
//     // 3) Public methods
//     accelerate() {
//       this.speed += 20;
//       this.#charge -= 1;
//       console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
//       return this;
//     }
  
//     // New method for LAB7.5
//     chargeBattery(chargeTo) {
//       this.#charge = chargeTo;
//       console.log(`${this.make}'s battery charged to ${this.#charge}%`);
//       return this;
//     }
//   }
  
//   // Test case
//   const rivian = new EVCL('Rivian', 120, 23);
//   console.log(rivian);
//   rivian.accelerate().chargeBattery(90).brake();
//   console.log(rivian);
  