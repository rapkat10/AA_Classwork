const Vector = function Vector(pos) {
  this.x = pos[0];
  this.y = pos[1];
}

Vector.method("extendBy", function(vel) { 
  this.x = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
  return this;
});

// Vector.prototype.extendBy = function extendBy(vel) { 
//   this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
//   return this;
// };

module.exports = Vector;