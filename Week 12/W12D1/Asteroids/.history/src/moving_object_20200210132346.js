function MovingObject(spec) {
  this.pos = spec.pos;
  this.vel = spec.vel;
  this.radius = spec.radius;
  this.color = spec.color;
};

MovingObject.method("draw", function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
  ctx.fill();
});

MovingObject.method()

module.exports = MovingObject;