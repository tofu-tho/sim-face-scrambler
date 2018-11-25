function generateBoolean() {
  return Math.random() < 0.5;
}

// boundary inclusive
function generateNumber(minimum, maximum) {
  const range = (maximum - minimum) + 1;
  return Math.floor(Math.random() * range) + minimum;
}

// return: [0, maximum]
function generateTwoUniqueNumbers(minimum, maximum) {
  const firstNum = generateNumber(minimum, maximum);
  let secondNum = generateNumber(minimum, maximum);
  while (firstNum === secondNum) {
    secondNum = generateNumber(minimum, maximum);
  }
  return [firstNum, secondNum];
}

module.exports = {
  generateBoolean,
  generateNumber,
  generateTwoUniqueNumbers
}
