
function Game () {
    this.addAsteroids();
};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.method("addAsteroids", function () {
    let asteroids = [];
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let x = Math.floor(Math.random() * Game.DIM_X),
            y = Math.floor(Math.random() * Game.DIM_Y),
            aster = new Asteroid({pos: [x, y]});
        asteroids.push(aster);
    }
    this.asteroids = asteroids;
    return this;
});

Game.method("draw", function (ctx) {
    ctx.clearRect(0, 0, canvas.width, );
});

module.exports = Game;