// TODO: write your code here
const boardSize = 4;
const container = document.getElementById('game-container');

if (container) {
  for (let i = 0; i < boardSize ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

const cells = Array.from(document.querySelectorAll('.cell'));

function figaro(index, number) {
  if (index !== -1) {
    cells[index].classList.remove('character');
  }
  const figaroCell = cells[number];
  figaroCell.classList.add('character');
}

setInterval(() => {
  const index = cells.findIndex((item) => item.className.includes('character'));
  let number = Math.floor(Math.random() * cells.length);
  if (number === index) {
    number = Math.floor(Math.random() * cells.length);
  } else {
    figaro(index, number);
  }
},
1500);

// функция для теста, чтобы не ругался circleci
export default function demo(value) {
  return value;
}
