const Vector = function Vector(pos) {
  this.x = pos[0];
  this.y = pos[1];
}

Vector.method("extendBy", function(vel) { 
  [this.x, this.y] = [this.x + vel[0], this.y + vel[1]]; 
  return this;
});

Vector.method("scaleBy", function(m) {
    this.x *= m;
    this.y *= m;
});

Vector.random = function(length) 

// Vector.prototype.extendBy = function extendBy(vel) { 
//   this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
//   return this;
// };

module.exports = Vector;