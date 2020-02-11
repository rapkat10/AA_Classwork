/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\"),\n  Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\"),\n  Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Asteroid(spec) {\n  spec.vel = Vector.random(2.5);\n  spec.color = Asteroid.COLOR;\n  spec.radius = Asteroid.RADIUS;\n  MovingObject.apply(this, [spec]);\n};\n\nutils.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = \"#0000ff\";\nAsteroid.RADIUS = 25;\n\nAsteroid.method(\"collideWith\", function(mover) {\n  if (mover instanceof Ship) {\n    mover.relocate();\n  } else if (mover instanceof Bullet) {\n    this.game.remove(mover);\n  };\n});\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Bullet (spec) {\n  spec.color = Bullet.COLOR;\n  spec.radius = Bullet.RADIUS;\n  spec.vel.scaleBy(1.5);\n  MovingObject.apply(this, [spec])\n};\n\nutils.inherits(Bullet, MovingObject);\nBullet.COLOR = \"#add8e6\";\nBullet.RADIUS = 5;\n\n\nBullet.method(\"collideWith\", function(mover) {\n  if (!(mover instanceof Asteroid)) {\n    alert(\"collided\")\n  };\n});\n\n\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\"),\n  Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Game () {\n    this.addAsteroids();\n    this.ship = new Ship({pos: this.randomPosition(), game: this});\n    this.bullets = [];\n};\n\nGame.DIM_X = 600;\nGame.DIM_Y = 400;\nGame.NUM_ASTEROIDS = 4;\n\nGame.method(\"allObjects\", function() {\n  return [...this.asteroids, ...this.bullets, this.ship]\n});\n\nGame.method(\"addAsteroids\", function () {\n  let asteroids = [];\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let pos = this.randomPosition(),\n      aster = new Asteroid({pos: pos, game: this});\n    asteroids.push(aster);\n  }\n  this.asteroids = asteroids;\n  return this;\n});\n\nGame.method(\"randomPosition\", function() {\n  let x = Math.floor(Math.random() * Game.DIM_X),\n    y = Math.floor(Math.random() * Game.DIM_Y);\n  return [x,y];\n});\n\nGame.method(\"draw\", function (ctx, width, height) {\n  ctx.clearRect(0, 0, width, height);\n  this.allObjects().forEach(obj => { obj.draw(ctx); });\n});\n\nGame.method(\"moveObjects\", function() {\n  this.allObjects().forEach(obj => { obj.move(); });\n});\n\nGame.method(\"remove\", function(object) {\n  let idx = this.asteroids.indexOf(object);\n  this.asteroids.splice(idx, 1);\n});\n\nGame.method(\"checkCollisions\", function() {\n  this.allObjects().forEach((object, idx) => {\n    this.allObjects().slice(idx+1).forEach((collider, jdx) => {\n      if (object.isCollidedWith(collider)) {\n        object.collideWith(collider);\n      };\n    });\n  });\n});\n\nGame.method(\"step\", function() {\n  this.moveObjects();\n  this.checkCollisions();\n});\n\nGame.method(\"wrap\", function(pos) {\n  if (pos.x > Game.DIM_X) {\n    pos.x -= Game.DIM_X;\n  } else if (pos.x < 0) {\n    pos.x += Game.DIM_X;\n  }\n\n  if (pos.y > Game.DIM_Y) {\n    pos.y -= Game.DIM_Y;\n  } else if (pos.y < 0) {\n    pos.y += Game.DIM_Y;\n  }\n});\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\")\n\nconst utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\"),\n  Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\"),\n  GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n  aster = new Asteroid({pos: [5,5]})\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  let canvas = document.getElementById(\"game-canvas\"),\n    ctx = canvas.getContext(\"2d\");\n\n  let gameView = new GameView(ctx, canvas);\n  gameView.start();\n  \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nfunction MovingObject(spec) {\n  this.pos = new Vector(spec.pos);\n  this.vel = spec.vel;\n  this.radius = spec.radius;\n  this.color = spec.color;\n  this.game = spec.game;\n};\n\nMovingObject.method(\"draw\", function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI, false);\n  ctx.fill();\n});\n\nMovingObject.method(\"move\", function() {\n    this.pos.extendBy(this.vel);\n    this.game.wrap(this.pos);\n});\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nfunction MovingObject(spec) {\n  this.pos = new Vector(spec.pos);\n  this.vel = spec.vel;\n  this.radius = spec.radius;\n  this.color = spec.color;\n  this.game = spec.game;\n};\n\nMovingObject.method(\"draw\", function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI, false);\n  ctx.fill();\n});\n\nMovingObject.method(\"move\", function() {\n    this.pos.extendBy(this.vel);\n    this.game.wrap(this.pos);\n});\n\nMovingObject.method(\"isCollidedWith\", function(mover) {\n  return this.pos.dist(mover.pos) < (mover.radius + this.radius - 1)\n});\n\nMovingObject.method(\"collideWith\", function(mover) {\n  // this.game.remove(this);\n  // this.game.remove(mover);\n});\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Vector = function Vector(pos) {\n  this.x = pos[0];\n  this.y = pos[1];\n}\n\nVector.method(\"extendBy\", function(vel) { \n  [this.x, this.y] = [this.x + vel.x, this.y + vel.y]; \n  return this;\n});\n\nVector.method(\"scaleBy\", function(m) {\n    this.x *= m;\n    this.y *= m;\n});\n\nVector.random = function(length) {\n    const deg = 2 * Math.PI * Math.random(),\n        vector = new Vector([Math.sin(deg), Math.cos(deg)]);\n    vector.scaleBy(length);\n    return vector;\n};\n\n// Vector.prototype.extendBy = function extendBy(vel) { \n//   this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; \n//   return this;\n// };\n\nmodule.exports = Vector;\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });