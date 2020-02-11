const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Bullet (spec) {
  spec.color = Bullet.COL
  MovingObject.apply(this, [spec])
};

utils.inherits(Bullet, MovingObject);




module.exports = Bullet;