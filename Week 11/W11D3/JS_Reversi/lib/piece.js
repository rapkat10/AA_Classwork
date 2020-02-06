/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    // this.color = (this.color == "black") ? "white" : "black";
    // return this.color;
    if (this.color === "white" ) {
        this.color = "black";
    } else {
        this.color = "white";
    }
    return this.color;
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    // Piece.prototype.oppColor(); this is not how  we call the method!
    this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    return this.color.toUpperCase()[0];
};

module.exports = Piece;
