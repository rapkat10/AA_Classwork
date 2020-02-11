const Vector = require("./vector");

function MovingObject(spec) {
  this.pos = new Vector(spec.pos);
  this.vel = spec.vel;
  this.radius = spec.radius;
  this.color = spec.color;
};

MovingObject.method("draw", function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI, false);
  ctx.fill();
});

MovingObject.method("move", function() {
    this.pos.extendBy(this.vel);
});

module.exports = MovingObject;