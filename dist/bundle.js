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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./order/uploadFile.js */ \"./src/order/uploadFile.js\");\n\n__webpack_require__(/*! ./fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n\n__webpack_require__(/*! ./normalize.scss */ \"./src/normalize.scss\");\n\n__webpack_require__(/*! ./header/style.scss */ \"./src/header/style.scss\");\n\n__webpack_require__(/*! ./navs/style.scss */ \"./src/navs/style.scss\");\n\n__webpack_require__(/*! ./main/style.scss */ \"./src/main/style.scss\");\n\n__webpack_require__(/*! ./order/style.scss */ \"./src/order/style.scss\");\n\n//# sourceURL=webpack:///./src/app.js?");

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

/***/ "./src/icons/error.svg":
/*!*****************************!*\
  !*** ./src/icons/error.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"file/\";\n\n//# sourceURL=webpack:///./src/icons/error.svg?");

/***/ }),

/***/ "./src/main/style.scss":
/*!*****************************!*\
  !*** ./src/main/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/main/style.scss?");

/***/ }),

/***/ "./src/navs/style.scss":
/*!*****************************!*\
  !*** ./src/navs/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/navs/style.scss?");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = drageDropFile;\nfunction drageDropFile(showFiles) {\n    var dragAndDropWindow = document.getElementById(\"dragAndDropWindow\");\n    var documentElement = document.documentElement;\n\n    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {\n        dragAndDropWindow.addEventListener(eventName, stopEvents, false);\n        documentElement.addEventListener(eventName, stopEvents, false);\n    });\n\n    documentElement.ondragover = function (e) {\n        dragAndDropWindow.className = \"dragenDropField\";\n    };\n\n    documentElement.ondrop = function (e) {\n        dragAndDropWindow.className = \"hide\";\n    };\n\n    dragAndDropWindow.ondrop = function (_ref) {\n        var files = _ref.dataTransfer.files;\n\n        showFiles(files);\n        dragAndDropWindow.className = \"hide\";\n    };\n};\n\nfunction stopEvents(e) {\n    e.preventDefault();\n    e.stopPropagation();\n}\n\n//# sourceURL=webpack:///./src/order/dragenDropFile.js?");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dragenDropFile = __webpack_require__(/*! ./dragenDropFile */ \"./src/order/dragenDropFile.js\");\n\nvar _dragenDropFile2 = _interopRequireDefault(_dragenDropFile);\n\nvar _error = __webpack_require__(/*! ../icons/error.svg */ \"./src/icons/error.svg\");\n\nvar _error2 = _interopRequireDefault(_error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FileManager = function () {\n    function FileManager() {\n        _classCallCheck(this, FileManager);\n\n        this.addedFiles = [];\n        this.filesContainer = document.getElementsByClassName(\"filesContainer\")[0];\n        this.deleteIcon = \"/Users/germanignatovich/Desktop/work/sawmill/src/icons/error.svg\"; // TODO настроить webpack на иконки\n        this.fileIcon = \"/Users/germanignatovich/Desktop/work/sawmill/src/icons/file.svg\";\n    }\n\n    _createClass(FileManager, [{\n        key: \"showFiles\",\n        value: function showFiles(newFiles) {\n            var _this = this;\n\n            var elemFiles = newFiles.map(function (file) {\n                var idFile = _this.addedFiles.length;\n\n                var logoContainer = _this.createLogoFile(file);\n                var deleteButton = _this.createDeleteButton(idFile);\n\n                var fileContainer = document.createElement(\"div\");\n\n                fileContainer.appendChild(logoContainer);\n                fileContainer.appendChild(deleteButton);\n\n                fileContainer.className = \"fileContainer\";\n                fileContainer.dataset.idFile = idFile;\n\n                _this.addedFiles = [].concat(_toConsumableArray(_this.addedFiles), [file]);\n                return fileContainer;\n            });\n\n            elemFiles.map(function (fileContainer) {\n                _this.filesContainer.appendChild(fileContainer);\n                return fileContainer;\n            });\n        }\n    }, {\n        key: \"createLogoFile\",\n        value: function createLogoFile(file) {\n            var logoIcon = document.createElement(\"img\");\n            logoIcon.src = this.fileIcon;\n\n            var logoText = document.createElement(\"p\");\n            logoText.innerText = file.name;\n\n            var logoContainer = document.createElement(\"span\");\n            logoContainer.appendChild(logoIcon);\n            logoContainer.appendChild(logoText);\n\n            return logoContainer;\n        }\n    }, {\n        key: \"createDeleteButton\",\n        value: function createDeleteButton(idFile) {\n            var _this2 = this;\n\n            var deleteButton = document.createElement(\"button\");\n            deleteButton.type = \"button\";\n\n            var containerForIcon = document.createElement(\"img\");\n            containerForIcon.src = _error2.default;\n            deleteButton.appendChild(containerForIcon);\n            deleteButton.onclick = function (e) {\n                return _this2.deleteFile(e, idFile);\n            };\n\n            return deleteButton;\n        }\n    }, {\n        key: \"deleteFile\",\n        value: function deleteFile(_ref, idFile) {\n            var currentTarget = _ref.currentTarget;\n\n            this.addedFiles[idFile] = null;\n\n            var fileContainer = currentTarget.parentNode;\n            fileContainer.remove();\n        }\n    }, {\n        key: \"handleFiles\",\n        value: function handleFiles(files) {\n            var arrayFiles = Array.from(files);\n            this.showFiles(arrayFiles);\n        }\n    }]);\n\n    return FileManager;\n}();\n\nvar inputFiles = document.getElementById(\"fileElem\");\nvar fileManager = new FileManager(); // TODO добавить inputFiles в класс\ninputFiles.onchange = function (e) {\n    return fileManager.handleFiles(e.target.files);\n}; // TODO добавить обрабутку события в класс, узнать как это сделать\n\n(0, _dragenDropFile2.default)(function (files) {\n    return fileManager.handleFiles(files);\n});\n\n//# sourceURL=webpack:///./src/order/uploadFile.js?");

/***/ })

/******/ });