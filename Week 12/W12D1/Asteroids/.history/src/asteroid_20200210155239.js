const utils = require("./utils");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  MovingObject(spec)
};


module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });