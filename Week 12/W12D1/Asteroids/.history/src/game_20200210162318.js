function Game () {};

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.method("addAsteroids", function () {
    let asteroid = [];
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let x = Math.floor(Math.random());
        let aster = new Asteroid({pos: []})
    }
});

module.exports = Game;