Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

const Utils = {
  inherits(child, parent) {
    function S() {}
    S.prototype = parent.prototype;
    
  }
};

module.exports = Utils;