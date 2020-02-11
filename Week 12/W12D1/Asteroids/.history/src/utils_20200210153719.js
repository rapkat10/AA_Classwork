Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

const Utils = {
  inherits(child, parent) {
    function S() {}
    S.prototype = parent.prototype;
    child.prototype = new S();  
    child.prototype.constructor = child;
  }
};

module.exports = Utils;