//   LAB7.2: 
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Phương thức "accelerate" để tăng speed
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
    }
  
    // Phương thức "brake" giảm speed
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    }
  
    // Getter 'speedUS' trả về speed hiện tại với đơn vị mi/h
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Setter 'speedUS' để thay đổi tốc độ hiện tại tính bằng mi/h
    set speedUS(newSpeedUS) {
      this.speed = newSpeedUS * 1.6;
    }
  }
  
  // Khởi tạo đối tượng ô tô (Car)
  const fordCar = new Car('Ford', 120);
  
  // Hiển thị thông tin ban đầu
  console.log(`Car data: ${fordCar.make} is running at ${fordCar.speed} km/h`);
  
  // Thực hiện các phương thức và getter/setter
  fordCar.accelerate(); // Speed of Ford after accelerating: 130 km/h
  console.log(`Speed of Ford in mi/h: ${fordCar.speedUS} mi/h`);
  fordCar.speedUS = 75; // Setting new speed in mi/h
  console.log(`New speed of Ford: ${fordCar.speed} km/h`);

  