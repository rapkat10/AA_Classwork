console.log("Webpack is working!")

const utils = require("./utils")
const Vector = require("./vector")
const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

let aster = new Asteroid({ pos: [30, 30] });

window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  
  const mover = new MovingObject(
    {
      pos: [2, 2],
      vel: [20, 20],
      radius: 100,
      color: "#ff0000"
    }
  );
  
  const aster = new Asteroid({ pos: [50, 50] });
  aster.draw(ctx);

  for (let i = 0; i<10; i++) {
    aster.move(ctx)
  }
    
    
  
});