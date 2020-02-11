const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  spec.vel = Vector.random(20);
  spec.color = Asteroid.COLOR;
  spec.radius = Asteroid.RADIUS;
  MovingObject.apply(this, [spec]);
};

Asteroid.COLOR = "#0000ff";
Asteroid.RADIUS = 50;

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });