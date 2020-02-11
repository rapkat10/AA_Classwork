const Asteroid = require("./asteroid");

function Game () {
    this.addAsteroids();
};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 2;

Game.method("addAsteroids", function () {
  let asteroids = [];
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let x = Math.floor(Math.random() * Game.DIM_X),
      y = Math.floor(Math.random() * Game.DIM_Y),
      aster = new Asteroid({pos: [x, y], game: this});
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

Game.method("remove", function(object) {
  let idx = this.asteroids.indexOf(object);
  this.asteroids.splice(idx, 1)
});

Game.method("checkCollisions", function() {
  this.asteroids.forEach((aster, idx) => {
    this.asteroids.slice(idx+1).forEach((jAster, jdx) => {
      if (aster.isCollidedWith(jAster)) {
        alert("Collision");
      };
    });
  });
});

Game.method("step", function() {
  this.moveObjects();
  this.checkCollisions();
});

Game.method("wrap", function(pos) {
  if (pos.x > Game.DIM_X) {
    pos.x -= Game.DIM_X;
  } else if (pos.x < 0) {
    pos.x += Game.DIM_X;
  }

  if (pos.y > Game.DIM_Y) {
    pos.y -= Game.DIM_Y;
  } else if (pos.y < 0) {
    pos.y += Game.DIM_Y;
  }
});


module.exports = Game;