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

/***/ "./src/components/navigation/hamburger.scss":
/*!**************************************************!*\
  !*** ./src/components/navigation/hamburger.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/navigation/hamburger.scss?");

/***/ }),

/***/ "./src/components/navigation/navigation.js":
/*!*************************************************!*\
  !*** ./src/components/navigation/navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.scss */ \"./src/components/navigation/navigation.scss\");\n/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hamburger_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger.scss */ \"./src/components/navigation/hamburger.scss\");\n/* harmony import */ var _hamburger_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hamburger_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass Nav {\r\n    constructor() {\r\n        this.$el = document.querySelector('.js-nav');\r\n        this.init();\r\n    }\r\n    init() {\r\n        if (!this.$el) {\r\n            return;\r\n        }\r\n\r\n        this.isOpened = false;\r\n        this.$burger = this.$el.querySelector('.js-nav-burger');\r\n        this.$linksWrap = this.$el.querySelector('.js-nav-links-wrap');\r\n        this.navEvent = new Event('navProcess');\r\n        this.$burger.addEventListener('click', this.burgerClickHandler.bind(this));\r\n        this.$linksWrap.addEventListener('click', this.navClickHandler.bind(this));\r\n        document.addEventListener('click', this.docClickHandler.bind(this));\r\n        \r\n    }\r\n\r\n    burgerClickHandler() {\r\n        this[this.isOpened ? 'close' : 'open']();\r\n    }\r\n\r\n    navClickHandler(e) {\r\n        const $link = e.target.closest('.js-nav-link');\r\n        if ($link) {\r\n            document.dispatchEvent(this.navEvent);\r\n        }\r\n\r\n    }\r\n\r\n    close() {\r\n        this.isOpened = false;\r\n        this.$burger.classList.remove('is-active');\r\n        this.$el.classList.remove('is-opened');\r\n    }\r\n\r\n    open() {\r\n        this.isOpened = true;\r\n        this.$burger.classList.add('is-active');\r\n        this.$el.classList.add('is-opened');\r\n    }\r\n\r\n    docClickHandler(e) {\r\n        if (!e.target.closest('.js-nav')) {\r\n            this.close();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/navigation/navigation.js?");

/***/ }),

/***/ "./src/components/navigation/navigation.scss":
/*!***************************************************!*\
  !*** ./src/components/navigation/navigation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/navigation/navigation.scss?");

/***/ }),

/***/ "./src/components/quote/quote.js":
/*!***************************************!*\
  !*** ./src/components/quote/quote.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quote; });\n/* harmony import */ var _quote_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.scss */ \"./src/components/quote/quote.scss\");\n/* harmony import */ var _quote_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_quote_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Quote {\r\n    constructor() {\r\n        this.$el = document.querySelector('.js-quote');\r\n        this.endPoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'\r\n        this.init();\r\n    }\r\n    init() {\r\n        if (!this.$el) {\r\n            return;\r\n        }\r\n        this.$main = this.$el.querySelector('.js-quote-main');\r\n        this.$author = this.$el.querySelector('.js-quote-author');\r\n        document.addEventListener('navProcess', this.getQuote.bind(this))\r\n\r\n        this.getQuote();\r\n    }\r\n\r\n    getQuote() {\r\n        this.$el.classList.remove('is-visible');\r\n        const timestamp = Date.now();\r\n        const request = fetch(`${this.endPoint}&t=${timestamp}`).then((response)=> {\r\n            console.log(response);\r\n            response.json().then((data)=> {\r\n\r\n                console.log(data);\r\n                this.$main.innerHTML = data[0].content;\r\n                this.$author.innerHTML = data[0].title;\r\n                this.$el.classList.add('is-visible');\r\n            })\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/quote/quote.js?");

/***/ }),

/***/ "./src/components/quote/quote.scss":
/*!*****************************************!*\
  !*** ./src/components/quote/quote.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/quote/quote.scss?");

/***/ }),

/***/ "./src/general/main.scss":
/*!*******************************!*\
  !*** ./src/general/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/general/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _general_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/main.scss */ \"./src/general/main.scss\");\n/* harmony import */ var _general_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_quote_quote_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quote/quote.js */ \"./src/components/quote/quote.js\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation.js */ \"./src/components/navigation/navigation.js\");\n\r\n\r\n\r\n\r\n\r\nconst quote = new _components_quote_quote_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst nav = new _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });