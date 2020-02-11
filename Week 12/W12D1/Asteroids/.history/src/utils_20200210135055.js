Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};


function Vector() {}
Vector.prototype.extendBy = function("extendBy", function(pos, vel) {
  return [pos[0] + vel[0], pos[1] + vel[1]];
})



const Utils = {
  Vector: Vector
};


module.exports = Utils;