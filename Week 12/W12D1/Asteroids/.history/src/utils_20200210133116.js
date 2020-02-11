Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

function Vector() {
  
};

Vector.method("extendBy", function(pos, vel) {

});