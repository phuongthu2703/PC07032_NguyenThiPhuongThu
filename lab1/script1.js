const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'
    ],
    scored: [0, 4, 7, 8, 12, 15, 25, 31, 33, 44, 62, 64, 78, 80, 90],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    }
  };
  
  // LAB 1
  // 1. Tạo ra 1 mảng cầu thủ cho mỗi đội
  const [players1, players2] = game.players;
  // 2. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
  const allPlayers = [...players1, ...players2];
  // 3. Tạo mảng mới 'players1Final' với 3 cầu thủ thay người
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  // 4. Tạo biến thể hiện tỉ lệ kết quả trận đấu
  const { team1, x: draw, team2 } = game.odds;
  // 5. Viết hàm 'printGoals'
  const printGoals = (...scorers) => {
    for (const [index, scorer] of scorers.entries()) {
      console.log(`Goal ${index + 1}: ${scorer}`);
    }
  };
  // 6. In ra cầu thủ đã ghi bàn từ mảng game.scored
  printGoals(...game.scored.map((minute, index) => game.players[index]));
  
  // 7. In ra đội chiến thắng mà không sử dụng if/else hoặc toán tử 3 ngôi
  const winner = team1 > team2 ? game.team1 : team1 < team2 ? game.team2 : 'Hòa';
  console.log(`Đội chiến thắng: ${winner}`);
  
  // LAB 1.2
  // 1. In ra cầu thủ và số bàn thắng
  game.scored.forEach((minute, index) => console.log(`Goal ${index + 1}: ${game.players[index]} (${minute}'`));
  // 2. Tính tỉ lệ kết quả trận đấu
  const oddsAverage = (team1 + draw + team2) / 3;
  console.log(`Tỉ lệ kết quả trận đấu: ${oddsAverage.toFixed(2)}`);
  // 3. In ra tỉ lệ cược đẹp mắt
  console.log(`Tỉ lệ thắng của ${game.team1}: ${team1}`);
  console.log(`Tỉ lệ hòa: ${draw}`);
  console.log(`Tỉ lệ thắng của ${game.team2}: ${team2}`);
  
  // 4. Tạo đối tượng 'scorers'
  const scorers = {};
  for (const scorer of game.scored) {
    const player = game.players[scorer];
    scorers[player] = (scorers[player] || 0) + 1;
  }
  console.log('Đối tượng scorers:', scorers);
  