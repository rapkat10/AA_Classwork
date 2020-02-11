const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Bullet (spec) {
  spec.color = Bullet.COLOR;
  spec.radius = Bullet.RADIUS;
  spec.vel.scaleBy(1.5);
  MovingObject.apply(this, [spec])
};

Bullet.COLOR = "#add8e6";
Bullet.RADIUS = 5;

utils.inherits(Bullet, MovingObject);

Asteroid.method("collideWith", function(mover) {
  if (mover instanceof Ship) {
    mover.relocate();
  } else if (mover instanceof Bullet) {
    this.game.remove(mover);
  };
});



module.exports = Bullet;