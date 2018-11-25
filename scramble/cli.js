const robot = require('robotjs');
const generateSim = require("./scramble");

function getMousePosition() {
  const coordinates = robot.getMousePos();
  console.log(coordinates)
}

if (process.argv[2] === 'getMouseCoordinates') {
  setInterval(getMousePosition, 1000)
} else {
  const options = {
    numOfSims: 1,
    femaleChance: 50,
    temperStrength: 33,
  };
  generateSim(options);
}
