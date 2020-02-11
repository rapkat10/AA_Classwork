const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");
  
  
const Asteroid = require("./asteroid");

function Bullet (spec) {
  spec.color = Bullet.COLOR;
  spec.radius = Bullet.RADIUS;
  spec.vel.scaleBy(1.5);
  MovingObject.apply(this, [spec])
};

utils.inherits(Bullet, MovingObject);
Bullet.COLOR = "#add8e6";
Bullet.RADIUS = 5;


Bullet.method("collideWith", function(mover) {
  if (!(mover instanceof Asteroid)) {
    alert("collided")
  };
});



module.exports = Bullet;