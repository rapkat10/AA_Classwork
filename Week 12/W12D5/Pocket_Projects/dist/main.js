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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Clock {
    constructor() {
      // 1. Create a Date object.
      const currentTime = new Date();
  
      // 2. Store the hour, minute, and second.
      this.hours = currentTime.getHours();
      this.minutes = currentTime.getMinutes();
      this.seconds = currentTime.getSeconds();
  
      // 3. Call printTime.
      // this.printTime();
  
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000);
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      const timeString = [this.hours, this.minutes, this.seconds].join(":");
  
      // Use console.log to print it.
      // console.log(timeString);
        return timeString;
    }
  
    _tick() {
      // 1. Increment the time by one second.
      this._incrementSeconds();
  
      // 2. Call printTime.
      this.printTime();
    }
  
    _incrementSeconds() {
      // 1. Increment the time by one second.
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this._incrementMinutes();
      }
    }
  
    _incrementMinutes() {
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this._incrementHours();
      }
    }
  
    _incrementHours() {
      this.hours = (this.hours + 1) % 24;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Clock);
 



/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogs, dogLinkCreator, attachDogLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogs", function() { return dogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogLinkCreator", function() { return dogLinkCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachDogLinks", function() { return attachDogLinks; });

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = () => {
  const dogKeys = Object.keys(dogs);
  let dogLinks = [];
  dogKeys.forEach((dogName) => {
    const aTag = document.createElement("a");
    aTag.innerHTML = dogName;
    aTag.setAttribute("href", dogs[dogName]);
    aTag.setAttribute("target", "_blank");
    const li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(aTag);
    dogLinks.push(li);
  })
  return dogLinks
};

const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();
  const dropdown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(dog => dropdown.appendChild(dog))
  
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ "./src/warmup.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "./src/clock.js");
/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ "./src/drop_down.js");






const clock = new _clock__WEBPACK_IMPORTED_MODULE_1__["default"]();
const clockEl = document.getElementById("clock");
window.setInterval(() => {Object(_warmup__WEBPACK_IMPORTED_MODULE_0__["htmlGenerator"])(clock.printTime(), clockEl)}, 1000);
Object(_drop_down__WEBPACK_IMPORTED_MODULE_2__["attachDogLinks"])();


document.addEventListener("DOMContentLoaded", () => {
    const dogUl = document.getElementsByClassName("drop-down-dog-list")
    const dogNav =document.getElementsByClassName("drop-down-dog-nav")
    // debugger;
    dogNav[0].addEventListener("mouseenter",(e) => {
        // debugger;
        const target = e.target
        target.classList.remove("hidden")
    })
    
    dogNav[0].addEventListener("mouseleave",(e) => {
        const target = e.target
        target.classList.add("hidden")
    })
    // handleEnter()
    // handleLeave()
})

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlGenerator", function() { return htmlGenerator; });

const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
    const textNode = document.createTextNode(string);
    const pEl = document.createElement("p");
    pEl.appendChild(textNode);
    while (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.firstChild);
    }
    htmlElement.appendChild(pEl);
};
// <p>Party Time</p>
htmlGenerator('Party Time.', partyHeader);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map