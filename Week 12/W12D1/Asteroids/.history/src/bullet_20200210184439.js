const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Bullet (spec) {
  
  MovingObject.apply(this, [spec])
};





module.exports = Bullet;