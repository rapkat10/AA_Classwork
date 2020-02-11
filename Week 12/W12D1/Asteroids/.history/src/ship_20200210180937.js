function Ship(spec) {
  vec = new Vector([0,0]);
  let spec = {
    vel: Vector.,
    color: ,
    radius: 
  }
  MovingObject.apply(this, [spec]);
};

utils.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "#ff0000"


module.exports = Ship;