const Game = require("./game");

function GameView (ctx, canvas) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.game = new Game();
};

GameView.method("start", function() {
  let that = this;
  setInterval(() => {
    that.game.draw(ctx, this.canvas.width, this.canvas.height);
    that.game.moveObjects();
  }, 20);
});


module.exports = GameView;