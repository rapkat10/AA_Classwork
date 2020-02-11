const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Asteroid(spec) {
  spec.vel = Vector.random(5);
  spec.color = Asteroid.COLOR;
  spec.radius = Asteroid.RADIUS;
  MovingObject.apply(this, [spec]);
};

utils.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#0000ff";
Asteroid.RADIUS = 15;

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });