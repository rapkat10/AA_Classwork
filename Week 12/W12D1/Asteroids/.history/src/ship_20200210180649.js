function Ship(spec) {
  let spec = {
    vel: ,
    color: ,
    radius: 
  }
  MovingObject.apply(this, [spec]);
};

utils.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "#ff0000"


module.exports = Ship;