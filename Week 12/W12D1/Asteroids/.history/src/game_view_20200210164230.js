const Game = require("./game");

function GameView (ctx, canvas) {
  this.ctx = ctx;
  this.
  this.game = new Game();
};

GameView.method("start", () => {
  setInterval(() => {
    game.draw(ctx, this.canvas.width, this.canvas.height)
    game.moveObjects()
  }, 20)
});


module.exports = GameView;