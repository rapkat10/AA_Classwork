const View = require("./ttt-view");
const Game = require("../../Tic_Tac_Toe_Node_Solutions/game");

const view = new View(); 
const game = new Game();

$(() => {
  const $el = $(".ttt");
  const newGame = new Game();
  const newView = new View(newGame, $el);
});