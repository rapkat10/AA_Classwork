console.log("Webpack is working!")

const utils = require("./utils")
const MovingObject = require("./moving_object");

window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);

  let mover = new MovingObject(
    {
      pos: [2, 2],
      vel: 1,
      radius: 1,
      color: "#ff0000"
    }
  );
  mover.draw(ctx)

});