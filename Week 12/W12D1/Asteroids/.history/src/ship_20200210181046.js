cont
function Ship(spec) {
  vel = new Vector([0,0]);
  let spec = {
    vel: vel,
    color: Ship.COLOR,
    radius: Ship.RADIUS
  }
  MovingObject.apply(this, [spec]);
};

utils.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "#ff0000"


module.exports = Ship;