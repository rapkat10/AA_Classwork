Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

function Vector() {};

Vector.method("extendBy", function(pos, vel) {
  return [pos[0] + vel[0], pos[1] + vel[1] ]
});