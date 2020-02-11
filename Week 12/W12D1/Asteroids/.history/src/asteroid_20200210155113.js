const utils = require("./utils");

function Asteroid(spec) {
  utils.inherits(Asteroid, MovingObject);
  MovingObject()
};



module.exports = Asteroid;