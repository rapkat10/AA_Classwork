const utils = require("./utils"),
  Vector = require("./vector");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  spec.vel = Vector.random(2);
  spec.color = 
  MovingObject(spec)
};

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });