Vector = function Vector() {}

Vector.method("extendBy", function(pos, vel) { 
  return [pos[0] + vel[0], pos[1] + vel[1]]; 
});

Vector.prototype.extendBy = function extendBy()

module.exports = Vector;