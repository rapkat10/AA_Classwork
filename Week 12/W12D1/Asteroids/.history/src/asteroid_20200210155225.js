const utils = require("./utils");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  MovingObject(spec)
};

pos: []

module.exports = Asteroid;