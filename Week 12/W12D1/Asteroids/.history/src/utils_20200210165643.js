Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

const Utils = {
  inherits(child, parent) {
   function create (o) {
    function O () {};
    O.prototype = o;
    return new 
   }
  }

};

module.exports = Utils;