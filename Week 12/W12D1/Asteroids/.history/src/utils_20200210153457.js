Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

const Utils = {
  inherits(child, parent) {
    function S() {}
  }
};

module.exports = Utils;