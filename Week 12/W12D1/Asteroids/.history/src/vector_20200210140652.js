const Vector = function Vector(pos) {
  this.pos = pos;
}

Vector.method("extendBy", function(pos, vel) { 
  this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
  return this;
});

Vector.prototype.extendBy = function extendBy(vel) { 
  this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
  return this;
};

module.exports = Vector;