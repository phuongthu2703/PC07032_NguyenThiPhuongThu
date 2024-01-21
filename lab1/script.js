const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer', 'Pavard', 'Lucas', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'
    ],
    [
      'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2030',
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
  }
};



// LAB1.1: (SECTION 9: DATA STRUCTURES. MODERN OPERATORS AND STRINGS > CODING
//   CHANLLENGE #1)
//1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const [players1, players2] = game.players;


// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
//mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
//'Thiago', 'Coutinho' và 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
//     'team1', 'draw' và 'team2')
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
//     spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn

const printGoals = function (...players) {
  players.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
};

printGoals(...game.scored);

// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà
// không sử dụng if/else hoặc toán tử 3 ngôi.
const winner =
  (game.odds.team1 < game.odds.team2 && game.team1) ||
  (game.odds.team1 > game.odds.team2 && game.team2) ||
  "Draw";
console.log(`Đội chiến thắng: ${winner}`);


// LAB1.2: (SECTION 9: DATA STRUCTURES. MODERN OPERATORS AND STRINGS > CODING
//   CHANLLENGE #2)
// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
//   dụ: "Goal 1: Lewandowski")
for (const [index, scorer] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${scorer}`);
}


// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
//   học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
//   nhớ)
const oddsAverage = (team1 + draw + team2) / 3;
console.log(`Tỉ lệ kết quả trận đấu: ${oddsAverage.toFixed(2)}`);


// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
const { odds } = game;
const oddsEntries = Object.entries(odds);

for (const [team, odd] of oddsEntries) {
  console.log(`Tỉ lệ thắng của ${game[team]}: ${odd}`);
}



// Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key
// (tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.

const scorers = {};

for (const scorer of game.scored) {
  scorers[scorer] = (scorers[scorer] || 0) + 1;
}

console.log(scorers);
