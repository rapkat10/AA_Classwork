const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Bullet (spec) {
  spec.color = Bullet.COLOR;
  spec.radius = Bullet.RADIUS;
  MovingObject.apply(this, [spec])
};

Bullet.COLOR = "#add8e6";
Bullet.RADIUS = 5;

utils.inherits(Bullet, MovingObject);




module.exports = Bullet;