/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  var _tlMousemove = new TimelineMax({
    yoyo: true,
    repeat: -1
  }); // COMMON


  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  var initHeaderFixed = function initHeaderFixed() {
    var getCurrentScroll = function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    },
        shrinkHeader = 5;

    var scroll = getCurrentScroll();
    scroll >= shrinkHeader ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');
    window.addEventListener('scroll', function () {
      var scroll = getCurrentScroll();
      scroll >= shrinkHeader ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');
    });
  };

  var smoothScrollAnchor = function smoothScrollAnchor() {
    document.querySelectorAll('.header__nav a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.querySelector('.header__nav a[href^="#"].is-active').classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };

  var gaspAnimation = function gaspAnimation() {
    $(".main").mousemove(function (e) {
      parallaxIt(e, "#welcome", "#welcomeAnimationImg1", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg2", 5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg3", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg4", 5);
      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg4", -6);
      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg5", 10);
    });

    function parallaxIt(e, currentEl, target, movement) {
      var $this = $(currentEl);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
  };

  var wowScrollAnimation = function wowScrollAnimation() {
    new WOW().init();
  };

  initHeaderFixed();
  smoothScrollAnchor();
  gaspAnimation();
  wowScrollAnimation();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;