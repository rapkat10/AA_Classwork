let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = Array.from(new Array(8), () => new Array(8));
  // let grid = Array(8).fill('').map(x => Array(8).fill(''))
  let black_piece = new Piece("black");
  let white_piece = new Piece("white");
  grid[3][4] = black_piece;
  grid[4][3] = black_piece;
  grid[3][3] = white_piece;
  grid[4][4] = white_piece;
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let col = pos[0];
  let row = pos[1];
  return this.grid[col][row];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  //validMoves return array of moves available to that color
  let result = this.validMoves(color);
  // if that array is empty then does not have moves
  if (result.length === 0) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  // first we want to get piece
  let mine = this.getPiece(pos)
  // we want to check if the piece exists and if that 
  //pieces' color matches the color passed in
  if (mine && mine.color === color) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos) === undefined) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (this.hasMove("black") && this.hasMove("white")) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if ((pos[0] < 8 && pos[0] >= 0) && (pos[1] < 8 && pos[1] >= 0)){
    return true;
  } else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color. => isValidPos(pos)
 *
 * Returns null if it hits an empty position. => isOccupied(pos)
 *
 * Returns null if no pieces of the opposite color are found.
 *  can use isMine(pos,color)
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  //board: is the current board
  //pos: is starting position
  //color: is current player color
  //dir: direction in which they want us to move. just another position
  //maybe coming from Board.DIRS
  //piecesToFlip: where we store the pieces from start-end position
  //that need to flipped?

  let nextStep = [pos[0] + dir[0], pos[1] + dir[1]]

  if( !board.isValidPos(nextStep) ){
    return null;
  } else if ( !board.isOccupied(nextStep) ){
    return null;
  } else if ( !board.isMine(nextStep, color) ) {
    return null;
  }


}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

  // if (this.isOccupied(pos)){
  //   return false;
  // } else if (this.isValidPos(pos) === false) {
  //   return false;
  // } else if (this.isMine(pos, color) === false) {
  //   return false;
  // } else {
  //   return true;
  // }
  if (this.isOccupied(pos)){
    return false;
  }
  if (this.isMine(pos, color) && this.isValidPos(pos)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let array = [];
  
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i, j], color)) {
        array.push([i, j]);
      }
    }
  }

  return array;
};

module.exports = Board;
