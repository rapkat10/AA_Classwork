console.log("Webpack is working!")

const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object"),
  Asteroid = require("./asteroid"),
  GameView = require("./game_view");

  aster = new Asteroid({pos: [5,5]})

window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  let gameView = new GameView(ctx, canvas);
  gameView.start();
  
});