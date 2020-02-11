const Asteroid = require("./asteroid");

function Game () {
    this.addAsteroids();
};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.method("addAsteroids", function () {
  let asteroids = [];
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let x = Math.floor(Math.random() * Game.DIM_X),
      y = Math.floor(Math.random() * Game.DIM_Y),
      aster = new Asteroid({pos: [x, y]});
    asteroids.push(aster);
  }
  this.asteroids = asteroids;
  return this;
});

Game.method("draw", function (ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  this.asteroids.forEach(aster => { aster.draw(ctx); });
});

Game.method("moveObjects", function() {
  this.asteroids.forEach(aster => { aster.move(); });
});

Game.method("wrap", function(pos) {
  //width: 0 <-> 600   (x)
  //height: 0 <-> 400  (y)
  //pos = [300, 401]
  //vel = [0, 1]
  //newPos = [300,1]

  //pos = [601, 200]
  //vel = [1,0]
  //newPos = [1,200]

  //pos = [601, 200]
  //vel = [1,1]
  //newPos = [MAX-200 + 1, 0]
  if (pos.x > Game.DIM_X) {
    pos.x -= Game.DIM_X;
  } else if (pos.x < 0) {
    pos.x += Game.DIM_X;;
  }
});


module.exports = Game;