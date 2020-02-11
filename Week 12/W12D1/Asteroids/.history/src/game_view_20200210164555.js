const Game = require("./game");

function GameView (ctx, canvas) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.game = new Game();
};

GameView.method("start", () => {
  setInterval(() => {
    this.game.draw(ctx, this.canvas.width, this.canvas.height);
    this.game.moveObjects();
  }, 20);
});


module.exports = GameView;