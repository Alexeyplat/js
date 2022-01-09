//       Подключение библиотеки
const readLine = require("readline-sync");

const tries = 5;

//       Генерируем массив
function getRandomNumber(min, max) {
  let randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
}

function getRandomArray() {
  let result = [];
  for (let i = 0; i < getRandomNumber(3, 6); i++) {
    result.push(getRandomNumber(1, 9));
  }
  return result;
}

let array = getRandomArray();

let guestsArray;
let positionsOnPlace;
let positions;
let rightAnswersOnPlace;
let rightAnswers;
let arrayClone = array.slice(0);
for (let i = 0; i < tries; i++) {
  guestsArray = readLine.question("Enter your numbers - ");
  positionsOnPlace = 0;
  positions = 0;
  rightAnswersOnPlace = [];
  rightAnswers = [];
  if (arrayClone.reduce((a, b) => String(a) + b) === guestsArray) {
    console.log("Вы всё угадали!");
    break;
  }
  for (let j = 0; j < guestsArray.length; j++) {
    if (guestsArray[j] == array[j]) {
      positionsOnPlace++;
      rightAnswersOnPlace.push(guestsArray[j]);
      delete array[j];
    }
    if (array.toString().includes(guestsArray[j])) {
      positions++;
      rightAnswers.push(guestsArray[j]);
    }
  }
  console.log(
    `Позиций на своих местах - ${positionsOnPlace.toString()} (${rightAnswersOnPlace.toString()})`
  );
  console.log(
    `Позиций не на своих местах - ${positions.toString()} (${rightAnswers.toString()})`
  );
}
console.log("Попробуйте ещё раз");
