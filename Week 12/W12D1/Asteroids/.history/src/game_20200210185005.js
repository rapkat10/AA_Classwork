const Asteroid = require("./asteroid"),
  Ship = require("./ship");

function Game () {
    this.addAsteroids();
    this.ship = new Ship({pos: this.randomPosition(), game: this});
    this.bullets = []
};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 4;

Game.method("allObjects", function() {
  return [...this.asteroids, ...this.bullets, this.ship]
});

Game.method("addAsteroids", function () {
  let asteroids = [];
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let pos = this.randomPosition(),
      aster = new Asteroid({pos: pos, game: this});
    asteroids.push(aster);
  }
  this.asteroids = asteroids;
  return this;
});

Game.method("randomPosition", function() {
  let x = Math.floor(Math.random() * Game.DIM_X),
    y = Math.floor(Math.random() * Game.DIM_Y);
  return [x,y];
});

Game.method("draw", function (ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  this.allObjects().forEach(obj => { obj.draw(ctx); });
});

Game.method("moveObjects", function() {
  this.allObjects().forEach(obj => { obj.move(); });
});

Game.method("remove", function(object) {
  let idx = this.asteroids.indexOf(object);
  this.asteroids.splice(idx, 1);
});

Game.method("checkCollisions", function() {
  this.allObjects().forEach((object, idx) => {
    this.allObjects().slice(idx+1).forEach((collider, jdx) => {
      if (object.isCollidedWith(collider)) {
        object.collideWith(collider);
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