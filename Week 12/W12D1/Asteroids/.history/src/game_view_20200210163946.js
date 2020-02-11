const Game = require("./game");

function GameView (ctx) {
  this.ctx = ctx;
  this.game = new Game();
};

GameView.method("start", () => {
  setInterval(gam, )
});


module.exports = GameView;