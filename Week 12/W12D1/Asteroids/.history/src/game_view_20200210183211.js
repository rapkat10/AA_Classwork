const Game = require("./game");

function GameView (ctx, canvas) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.game = new Game();
};

GameView.method("start", function() {
  // let that = this;
  setInterval(() => {
    this.game.draw(this.ctx, this.canvas.width, this.canvas.height);
    this.game.step();
  }, 20);
});

GameView.method("bindKeyHandlers", function() {
    key("w", function () {alert("w") });
});


module.exports = GameView;