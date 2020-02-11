console.log("Webpack is working!")

const GameView = require("./game_view"),
  Bullet = require("./bullet");


window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  let gameView = new GameView(ctx, canvas);
  gameView.start();
  
});