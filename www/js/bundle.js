/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var main = __webpack_require__(1);
	var renderer;
	var stage = new PIXI.Container();
	var canvas;
	var stageWidth = 0, stageHeight = 0;
	var init = function () {
	    renderer = PIXI.autoDetectRenderer(800, 800, { antialias: true, resolution: 2, transparent: true });
	    canvas = document.getElementById("content");
	    canvas.appendChild(renderer.view);
	    renderer.view.style.width = "100%";
	    renderer.view.style.height = "100%";
	    window.addEventListener("resize", resize);
	    window.addEventListener('orientationchange', resize);
	    window.addEventListener('mousedown', mousedown);
	    window.addEventListener('mouseup', mouseup);
	    window.addEventListener('mousemove', mousemove);
	    main.init(stage);
	    draw();
	    resize();
	};
	var ppos = 0;
	var mousedown = function (e) {
	    main.mouse.x = e.clientX;
	    main.mouse.y = e.clientY;
	    main.mousedown();
	};
	var mousemove = function (e) {
	    main.mouse.x = e.clientX;
	    main.mouse.y = e.clientY;
	    main.mousemove();
	};
	var mouseup = function (e) {
	    main.mouseup();
	};
	var draw = function () {
	    requestAnimationFrame(draw);
	    main.update();
	    TWEEN.update();
	    renderer.render(stage);
	};
	var resize = function () {
	    var width = canvas.offsetWidth;
	    var height = canvas.offsetHeight;
	    stageWidth = width;
	    stageHeight = height;
	    main.size.width = width;
	    main.size.height = height;
	    main.resize(width, height);
	    renderer.resize(width, height);
	};
	window.onload = init;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	exports.mouse = { x: 0, y: 0 };
	exports.size = { width: 0, height: 0 };
	exports.container = new PIXI.Container();
	exports.canvas = new PIXI.Graphics();
	function init(stage) {
	    stage.addChild(exports.container);
	    exports.container.addChild(exports.canvas);
	}
	exports.init = init;
	function update() {
	}
	exports.update = update;
	function mousedown() {
	}
	exports.mousedown = mousedown;
	function mouseup() {
	}
	exports.mouseup = mouseup;
	function mousemove() {
	    exports.canvas.clear();
	    exports.canvas.beginFill(0xff0000);
	    exports.canvas.drawRect(exports.mouse.x - 50, exports.mouse.y - 50, 100, 100);
	}
	exports.mousemove = mousemove;
	function resize(width, height) {
	}
	exports.resize = resize;


/***/ }
/******/ ]);