function Game () {};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.method("addAsteroids", function () {
    let asteroid = [];
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let x = Math.floor(Math.random() * Game.DIM_X),
            y = Math.floor(Math.random() * Game.DIM_Y),
            aster = new Asteroid({pos: [x, y]});
        asteroids
    }
});

module.exports = Game;