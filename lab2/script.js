
// LAB2.1: (SECTION 9: DATA STRUCTURES. MODERN OPERATORS AND STRINGS > CODING
//   CHANLLENGE #3)
// Hãy tiếp tục với app đặt cược của chúng ta! Lúc này, chúng ta có 1 mảng kết hợp
// theo dạng [key,value] tương ứng với những đoạn log ghi lại những sự kiện xảy ra
// trong trận đấu.
// Trong đó:
// -> key = phút diễn ra
// -> value = tên hành động diễn ra (ghi bàn, thay người, nhận thẻ đỏ,...)
// Bây giờ chúng ta có 1 mảng liên kế gồm các sự kiện xảy ra trong trận đấu cùng
// thời gian tương ứng
const events = [
    [17, '⚽ GOAL'],
    [36, '🔄 Substitution'],
    [47, '⚽ GOAL'],
    [63, '🟨 Yellow Card'],
    [64, '🟥 Red Card'],
    [75, '🔄 Substitution'],
    [82, '⚽ GOAL']
  ];
  
  // 1. Tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là không trùng nhau)
  const uniqueEvents = [...new Set(events.map(event => event[1]))];
  console.log(uniqueEvents);
  
  // 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
  const filteredEvents = events.filter(event => !(event[0] === 64 && event[1] === '🟨 Yellow Card'));
  console.log(filteredEvents);
  
  // 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút".
  // Lưu ý răng mỗi trận đấu có 90 phút.
  const totalEvents = events.length;
  const averageEventsPerMinute = totalEvents / 90;
  
  console.log(`[${totalEvents} events occurred, averaging one every ${Math.round(90 / averageEventsPerMinute)} minutes]`);
  
  // 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2
  events.forEach(event => {
    const half = event[0] <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${event[0]}: ${event[1]}`);
  });


  // LAB2.2: (SECTION 9: DATA STRUCTURES. MODERN OPERATORS AND STRINGS > CODING
  //   CHANLLENGE #4)
  function convertToCamelCase() {
    const inputText = document.getElementById("inputText").value;
    const variables = inputText.split("\n");

    const camelCaseResults = variables.map(variable => {
      const words = variable.split("_");
      const camelCase = words.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
                              .join("");
      return `${camelCase} ✅`.repeat(words.length - 1);
    });

    document.getElementById("output").innerText = camelCaseResults.join("\n");
  }

  // LAB2.3: (SECTION 9: DATA STRUCTURES. MODERN OPERATORS AND STRINGS > STRING
  //   METHOD PRACTICE)
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
const [type, from, to, time] = flight.split(';');
const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
console.log(output);
}

// LAB2.4: (SECTION 10: A CLOSER LOOK AT FUNCTIONS > CODING CHANLLENGE #2)
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
  