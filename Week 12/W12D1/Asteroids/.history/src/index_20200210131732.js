console.log("Webpack is working!")

const utils = require("./utils")
const MovingObject = require("./moving_object");

window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  let mover = new MovingObject(
    {
      pos
    }
  );
  mover.draw(ctx)

});