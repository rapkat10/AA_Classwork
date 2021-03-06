const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Asteroid(spec) {

  utils.inherits(Asteroid, MovingObject);
  spec.vel = Vector.random(2);
  spec.color = Asteroid.COLOR;
  spec.radius = Asteroid.RADIUS;
  this;
  MovingObject(spec);
};

Asteroid.COLOR = "#0000ff";
Asteroid.radius = 50;

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });