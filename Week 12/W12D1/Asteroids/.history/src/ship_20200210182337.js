const Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Ship(spec) {
  spec = {
    spec.vel: Vector.stopped(),
    spec.color: Ship.COLOR,
    specradius: Ship.RADIUS
  }
  MovingObject.apply(this, [spec]);
};

utils.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "#ff0000"

Ship.method("relocate", function() {
  this.pos = new Vector(this.game.randomPosition());
  this.vel = Vector.stopped();
});


module.exports = Ship;