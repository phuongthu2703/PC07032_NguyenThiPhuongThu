//Viet mot function tra ve ten va mssv


let sinhvien = (ten, mssv)=>
{
    return `${ten} - ${mssv}`
}

console.log(sinhvien('thu', 'Pc07032'))




// var ten = Thu  
// var mssv = PC07032

// function sinhvien(ten, mssv){
//     console.log (`${ten} - ${mssv}`)
// }
// sinhvien()


const person = [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Min'
        }
]


//Parameters  
function edit(id){
    //Xu ly
   person = {
    "name": "John",
    "age": 20
   }
   return person
}
// LAB 1.1

// 1. Tạo 1 mảng cầu thủ cho mỗi đội
let players1 = ['Neuer' , 'Pavard' , 'Martinez' , 'Alaba' , 'Davies' , 'Kimmich' , 'Goretzka' , 'Coman' , 'Muller' , 'Gnarby' , 'Lewandowski']     
let players2 = ['Burki' , 'Schulz' , 'Hummels' , 'Akanji' , 'Hakimi' , 'Weigl' , 'Witsel' , 'Hazard' , 'Brandt' , 'Sancho' , 'Gotze']

// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở các vị trí khác
let [gk , ...fieldPlayers] = players1 
console.log (gk , fieldPlayers)
let [gk2 , ...fieldPlayers2] = players2
console.log (gk2 , fieldPlayers2)

// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
let allPlayers = [...players1 , ...players2]
console.log (allPlayers)

// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 'Thiago', 'Coutinho' và 'Perisic'
let players1Final = [...players1 , 'Thiago' , 'Coutinho' , 'Perisic']
console.log (players1Final)

// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 'team1', 'draw' và 'team2')
const game = {
    odds: {
        team1: 1.75 ,
        draw: 3.50 ,
        team2: 2.50 
    } ,
    scored: ["Lewandowski" , "Gnarby" , "Lewandowski" , "Hummels"]
}

// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
let printGoals = (...namePlayers) => {
    let number = 0 
    namePlayers.map (item => {
        number += 1 
    })
    console.log (`Số lượng cầu thủ đã ghi bàn là: ${number}`)
    namePlayers.map (item => {
        console.log (`Các cầu thủ đã ghi bàn là: ${item}`)
    })
}

printGoals ('Davies' , 'Muller' , 'Lewandowski' , 'Kimmich')

// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng.
const {team1 , draw , team2} = game.odds

const winner = (odds1 , odds2 , team1 , team2) => {
  const result = odds1 - odds2
  return result / Math.abs (result) === 1 ? team1 : team2
}

console.log("Đội chiến thắng là: " + winner (team1 , team2 , 'team1' , 'team2'))

// LAB 1.2

// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví dụ: "Goal 1: Lewandowski")
let i = 0
game.scored.map (item => {
    i += 1 
    console.log (`Goal ${i}: ${item}`)
})

// Tính tỉ lệ kết quả trận đấu
;(() => {
    const [team1 , draw , team2] = Object.values (game.odds)
    console.log (`Tỉ lệ thắng của ${game.team1}: ${team1}`)
    console.log (`Tỉ lệ hòa của draw: ${draw}`)
    console.log (`Tỉ lệ thắng của ${game.team2}: ${team2}`)
}) ()

// Tạo đối tượng 'scorers'
const scorers = {}
for (const player of game.scored) {
  scorers [player] = (scorers[player] || 0) + 1
}

console.log (scorers)