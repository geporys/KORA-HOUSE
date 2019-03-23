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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_uploadFile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order/uploadFile.js */ \"./src/order/uploadFile.js\");\n/* harmony import */ var _homes_homes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homes/homes.js */ \"./src/homes/homes.js\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize.scss */ \"./src/normalize.scss\");\n/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_normalize_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/style.scss */ \"./src/header/style.scss\");\n/* harmony import */ var _header_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/style.scss */ \"./src/main/style.scss\");\n/* harmony import */ var _main_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_style_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _order_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/style.scss */ \"./src/order/style.scss\");\n/* harmony import */ var _order_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_order_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _homes_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homes/style.scss */ \"./src/homes/style.scss\");\n/* harmony import */ var _homes_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_homes_style_scss__WEBPACK_IMPORTED_MODULE_7__);\n// js\n\n\n\n// scss\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/fonts/fonts.scss":
/*!******************************!*\
  !*** ./src/fonts/fonts.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/fonts/fonts.scss?");

/***/ }),

/***/ "./src/header/style.scss":
/*!*******************************!*\
  !*** ./src/header/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/header/style.scss?");

/***/ }),

/***/ "./src/homes/homes.js":
/*!****************************!*\
  !*** ./src/homes/homes.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mockData_homes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mockData/homes */ \"./src/mockData/homes.js\");\n\n\nclass Homes {\n\n    constructor() {\n        this.homesContainer = document.getElementById(\"homes\");\n    }\n\n    addHomes(homes) {\n        homes.map(homeData => this.homesContainer.appendChild(this.createHomeContainer(homeData)));\n    }\n\n    createHomeContainer(homeData) {\n        const homeContainer = document.createElement(\"div\");\n        homeContainer.className = \"home\";\n\n        const homeImageContainer = this.createHomeImageContainer(homeData.image);\n        const homeSpecificationContainer = this.createHomeSpecification(homeData);\n\n        homeContainer.appendChild(homeImageContainer);\n        homeContainer.appendChild(homeSpecificationContainer);\n\n        return homeContainer;\n    }\n\n    createHomeSpecification({ name, square }) {\n        const homeNameContainer = document.createElement(\"div\");\n        homeNameContainer.innerText = \"Жилой дом: \" + name;\n\n        const homeSquareContainer = document.createElement(\"div\");\n        homeSquareContainer.innerText = \"Площадь: \" + `${square} м2`;\n\n        const homeSpecificationContainer = document.createElement(\"div\");\n        homeSpecificationContainer.className = \"home-specification\";\n\n        homeSpecificationContainer.appendChild(homeNameContainer);\n        homeSpecificationContainer.appendChild(homeSquareContainer);\n\n        return homeSpecificationContainer;\n    }\n\n    createHomeImageContainer(image) {\n        const imageContainer = document.createElement(\"div\");\n        imageContainer.className = \"home-image\";\n\n        return imageContainer;\n    }\n}\n\nconst home = new Homes();\n\nhome.addHomes(_mockData_homes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/homes/homes.js?");

/***/ }),

/***/ "./src/homes/style.scss":
/*!******************************!*\
  !*** ./src/homes/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/homes/style.scss?");

/***/ }),

/***/ "./src/icons/error.svg":
/*!*****************************!*\
  !*** ./src/icons/error.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fdeeccc473be5442c9def3687c07dce6.svg\";\n\n//# sourceURL=webpack:///./src/icons/error.svg?");

/***/ }),

/***/ "./src/main/style.scss":
/*!*****************************!*\
  !*** ./src/main/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/main/style.scss?");

/***/ }),

/***/ "./src/mockData/homes.js":
/*!*******************************!*\
  !*** ./src/mockData/homes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n    name: \"1-23\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-24\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-22\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-28\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-20\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-29\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-21\",\n    square: \"127\",\n    image: \"\"\n}, {\n    name: \"1-28\",\n    square: \"127\",\n    image: \"\"\n}]);\n\n//# sourceURL=webpack:///./src/mockData/homes.js?");

/***/ }),

/***/ "./src/normalize.scss":
/*!****************************!*\
  !*** ./src/normalize.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/normalize.scss?");

/***/ }),

/***/ "./src/order/dragenDropFile.js":
/*!*************************************!*\
  !*** ./src/order/dragenDropFile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drageDropFile; });\n\nfunction drageDropFile(showFiles) {\n    const dragAndDropWindow = document.getElementById(\"drag-and-drop-window\");\n    const documentElement = document.documentElement;\n\n    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {\n        dragAndDropWindow.addEventListener(eventName, stopEvents, false);\n        documentElement.addEventListener(eventName, stopEvents, false);\n    });\n\n    documentElement.ondragover = e => {\n        dragAndDropWindow.className = \"dragen-drop-field\";\n    };\n\n    documentElement.ondrop = e => {\n        dragAndDropWindow.className = \"hide\";\n    };\n\n    dragAndDropWindow.ondrop = ({ dataTransfer: { files } }) => {\n        showFiles(files);\n        dragAndDropWindow.className = \"hide\";\n    };\n};\n\nfunction stopEvents(e) {\n    e.preventDefault();\n    e.stopPropagation();\n}\n\n//# sourceURL=webpack:///./src/order/dragenDropFile.js?");

/***/ }),

/***/ "./src/order/style.scss":
/*!******************************!*\
  !*** ./src/order/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/order/style.scss?");

/***/ }),

/***/ "./src/order/uploadFile.js":
/*!*********************************!*\
  !*** ./src/order/uploadFile.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragenDropFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragenDropFile */ \"./src/order/dragenDropFile.js\");\n/* harmony import */ var _icons_error_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/error.svg */ \"./src/icons/error.svg\");\n/* harmony import */ var _icons_error_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_error_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass FileManager {\n\n    constructor() {\n        this.addedFiles = [];\n        this.filesContainer = document.getElementsByClassName(\"files-container\")[0];\n        // this.deleteIcon = \"/Users/germanignatovich/Desktop/work/KORA-HOUSE/src/icons/error.svg\"; // TODO настроить webpack на иконки\n        this.fileIcon = \"/Users/germanignatovich/Desktop/work/KORA-HOUSE/src/icons/file.svg\";\n    }\n\n    showFiles(newFiles) {\n        const elemFiles = newFiles.map(file => {\n            const idFile = this.addedFiles.length;\n\n            const logoContainer = this.createLogoFile(file);\n            const deleteButton = this.createDeleteButton(idFile);\n\n            const fileContainer = document.createElement(\"div\");\n\n            fileContainer.appendChild(logoContainer);\n            fileContainer.appendChild(deleteButton);\n\n            fileContainer.className = \"file-container\";\n            fileContainer.dataset.idFile = idFile;\n\n            this.addedFiles = [...this.addedFiles, file];\n            return fileContainer;\n        });\n\n        elemFiles.map(fileContainer => {\n            this.filesContainer.appendChild(fileContainer);\n            return fileContainer;\n        });\n    }\n\n    createLogoFile(file) {\n        const logoIcon = document.createElement(\"img\");\n        logoIcon.src = this.fileIcon;\n\n        const logoText = document.createElement(\"p\");\n        logoText.innerText = file.name;\n\n        const logoContainer = document.createElement(\"span\");\n        logoContainer.appendChild(logoIcon);\n        logoContainer.appendChild(logoText);\n\n        return logoContainer;\n    }\n\n    createDeleteButton(idFile) {\n        const deleteButton = document.createElement(\"button\");\n        deleteButton.type = \"button\";\n\n        const containerForIcon = document.createElement(\"img\");\n        containerForIcon.src = _icons_error_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\n        deleteButton.appendChild(containerForIcon);\n        deleteButton.onclick = e => this.deleteFile(e, idFile);\n\n        return deleteButton;\n    }\n\n    deleteFile({ currentTarget }, idFile) {\n        this.addedFiles[idFile] = null;\n\n        const fileContainer = currentTarget.parentNode;\n        fileContainer.remove();\n    }\n\n    handleFiles(files) {\n        const arrayFiles = Array.from(files);\n        this.showFiles(arrayFiles);\n    }\n}\n\nconst inputFiles = document.getElementById(\"file-elem\");\nconst fileManager = new FileManager(); // TODO добавить inputFiles в класс\ninputFiles.onchange = e => fileManager.handleFiles(e.target.files); // TODO добавить обрабутку события в класс, узнать как это сделать\n\nObject(_dragenDropFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(files => fileManager.handleFiles(files));\n\n//# sourceURL=webpack:///./src/order/uploadFile.js?");

/***/ })

/******/ });