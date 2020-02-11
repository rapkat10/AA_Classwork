const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object"),
  Ship = require("./ship");

function Asteroid(spec) {
  spec.vel = Vector.random(2.5);
  spec.color = Asteroid.COLOR;
  spec.radius = Asteroid.RADIUS;
  MovingObject.apply(this, [spec]);
};

utils.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#0000ff";
Asteroid.RADIUS = 25;

Asteroid.method("collideWith", function(mover) {
  if (mover instanceof Ship) {
    mover.relocate();
  } else if (mover instanceof Bullet) ;
});

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });