
// LAB3.2: (SECTION 11: WORKING WITH ARRAY > CODING CHALLENGE #1)
const checkDogs = function (dogsJulia, dogsKate) {
    // 1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI
    // CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông
    // của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó (vì đó là một cách
    // làm không tốt để thay đổi các tham số hàm)
    const juliaDogsCopy = dogsJulia.slice(1, -2);
    console.log(juliaDogsCopy);
  
    // 2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate
    const allDogs = [...juliaDogsCopy, ...dogsKate];
    console.log(allDogs);

    // 3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó
    // trưởng thành ("Chó số 1 là người lớn và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó
    // con")
    allDogs.forEach((dogAge, i) => {
      const dogStatus = dogAge >= 3 ? 'Chó trưởng thành' : 'Chó con';
      console.log(`Chó số ${i + 1} là ${dogStatus}, và ${dogAge} tuổi.`);
    });
  };
//   4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
  // Test data 1
  const dogsJulia1 = [3, 5, 2, 12, 7];
  const dogsKate1 = [4, 1, 15, 8, 3];
  checkDogs(dogsJulia1, dogsKate1);
  
  // Test data 2
  const dogsJulia2 = [9, 16, 6, 8, 3];
  const dogsKate2 = [10, 5, 6, 1, 4];
  checkDogs(dogsJulia2, dogsKate2);
  

//   LAB3.3: (SECTION 11: WORKING WITH ARRAY > CODING CHALLENGE #2)
//   Julia và Kate's đang học về loài chó. Lần này họ muốn tính tuổi trung bình của chó
//   theo tuổi của người.
  const calcAverageHumanAge = function (ages) {
    // 1. Tính tuổi của chó theo tuổi của con người theo công thức sau: nếu tuổi của chó
    // <= 2, tuổi của người = tuổi của chó * 2. Nếu tuổi của chó > 2, tuổi người = 16 +
    // tuổi của chó * 4.
    const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  
    // 2. Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi (lấy ra tất
    //     cả những chú chó trên 18 tuổi)
    const adults = humanAges.filter(age => age >= 18);
  
    // 3. Tính tuổi trung bình của các chú chó trưởng thành ra tuổi người
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    console.log(`The average adult dog age is: ${average}`);
  };

//   4. Chạy hàm với các dữ liệu mẫu dưới đây:
  // Test data 1
  const testData1 = [5, 2, 4, 1, 15, 8, 3];
  calcAverageHumanAge(testData1);
  
  // Test data 2
  const testData2 = [16, 6, 10, 5, 6, 1, 4];
  calcAverageHumanAge(testData2);

//   LAB3.4: (SECTION 11: WORKING WITH ARRAY > CODING CHALLENGE #4)
// Test data
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  
  // 1. Thêm thuộc tính recommendedFood vào mỗi chó
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // 2. Tìm chú chó của Sarah và kiểm tra khẩu phần ăn
  const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(
    `${sarahDog.owners.join(' and ')}'s dog ${
      sarahDog.curFood > sarahDog.recommendedFood * 1.1 ? 'eats too much!' : 'eats too little!'
    }`
  );
  
  // 3. Tạo mảng chủ của chó ăn quá nhiều và chó ăn quá ít
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap(dog => dog.owners);
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap(dog => dog.owners);
  
  // 4. In ra thông báo cho mỗi mảng
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5. Kiểm tra khẩu phần ăn có chính xác với đề nghị không
  const isExact = dogs.every(dog => dog.curFood === dog.recommendedFood);
  console.log(`Is every dog's food intake exact? ${isExact}`);
  
  // 6. Kiểm tra khẩu phần ăn có nằm trong mức hợp lý không
  const isReasonable = dogs.every(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
  );
  console.log(`Is every dog's food intake reasonable? ${isReasonable}`);
  
  // 7. In ra tất cả chó có khẩu phần ăn hợp lý
  const reasonableDogs = dogs.filter(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
  );
  console.log('Dogs with reasonable food intake:', reasonableDogs);
  
  // 8. Tạo mảng mới và sắp xếp theo khẩu phần ăn đề nghị
  const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log('Sorted dogs by recommended food:', sortedDogs);
  