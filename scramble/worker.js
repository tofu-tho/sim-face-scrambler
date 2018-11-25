const process = require('process');
const generateSim = require('./scramble');

module.exports = function(scrambleOptions, done) {
  generateSim(scrambleOptions);
  done()
}
