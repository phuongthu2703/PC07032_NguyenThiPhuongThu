//Tạo đối tượng
// let item_v1 ={
//     name : 'dao',
//     year: 2018
// }
// let item_v2 = new Object({
//     name : 'dao',
//     year: 2018
// })



const Student = function(name, year, phone, address){
      this.name = name;
      this.year = year;
      this.phone = phone;
      this.address = address;
}

Student.prototype.diemdanh = function (){
    //Xử lý chức năng điểm danh của Student
    console.log('Vắng mặt');

}


const itemNew = new Student('dao', 2010, '0768021704', 'daoln2@fe.edu.vn', 'can tho')
if(itemNew instanceof Student){
    //Xử lý đối tượng
} else {
    console.log('Dữ liệu không hợp lệ');
}
console.log(itemNew instanceof Student);

// console.log(itemNew);
// itemNew.diemdanh();


// function insert(Student){
//     console.log(Student.phone);
// }
// insert(itemNew)



class Person_v2 {
    constructor(name, year, phone, email, address){
        this.name = name;
        this.year = year;
        this.phone = phone;
        this.email = email;
        this.address = address;

      
    }


    getOld(){
        return 2024 - this.year;
    }
}

const itemNew_v2 = new Person_v2('newjeans', 2022, '0768021704', 'daoln2@fe.edu.vn', 'can tho')
console.log(itemNew_v2.getOld());
