const utils = require("./utils"),
  Vector = require("./vector");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  spec.vel = Vector.random(2);
  spec.color = Asteroid.COLOR;
  spec.radius = Asteroid.RADIUS;
  MovingObject(spec)
};

Asteroid.COLOR = "#0000ff";
Asteroid.

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });