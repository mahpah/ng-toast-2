(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/common", "@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ng-toast-2"] = factory(require("@angular/common"), require("@angular/core"));
	else
		root["ng-toast-2"] = factory(root["@angular/common"], root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var ToastMan = (function () {
    function ToastMan() {
        this.toasts = [];
    }
    ToastMan.prototype.success = function (title, body) {
        return this.show(title, body, 5000, 'success');
    };
    ToastMan.prototype.error = function (title, body) {
        return this.show(title, body, 5000, 'error');
    };
    ToastMan.prototype.close = function (item) {
        clearTimeout(item.timeout);
        this.toasts = this.toasts.filter(function (t) { return t !== item; });
    };
    ToastMan.prototype.show = function (title, body, timealive, type) {
        var _this = this;
        if (type === void 0) { type = 'default'; }
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: setTimeout(function () { return _this.toasts = _this.toasts.filter(function (t) { return t !== toast; }); }, timealive),
        };
        this.toasts = this.toasts.concat([toast]);
    };
    ToastMan = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ToastMan);
    return ToastMan;
}());
exports.ToastMan = ToastMan;


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(8);
var toast_man_service_1 = __webpack_require__(0);
var toast_container_component_1 = __webpack_require__(7);
var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function () {
        return {
            ngModule: ToastrModule,
            providers: [
                toast_man_service_1.ToastMan,
            ],
        };
    };
    ToastrModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            providers: [],
            declarations: [
                toast_container_component_1.ToastContainer,
            ],
            exports: [
                toast_container_component_1.ToastContainer,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ToastrModule);
    return ToastrModule;
}());
exports.ToastrModule = ToastrModule;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: fixed;\n  top: 1em;\n  right: 1em;\n  z-index: 1000;\n}\n\n.toast {\n  width: 20em;\n  padding: 1em 2em;\n  border-radius: 5px;\n  margin-bottom: 1em;\n  position: relative;\n}\n\n.toast .title {\n  font-size: .85em;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 2px;\n  margin-bottom: .5em;\n  white-space: nowrap;\n}\n\n.toast:hover {\n  opacity: .8;\n  transition: opacity 250ms;\n}\n\n.toast.default {\n  background: rgba(13, 13, 13, 0.8);\n  color: #eee;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n.toast.error {\n  background: rgba(204, 51, 51, 0.9);\n  color: #eee;\n  box-shadow: 0 1px 5px rgba(191, 64, 64, 0.5);\n}\n\n.toast.success {\n  background: rgba(0, 194, 146, 0.9);\n  color: #eee;\n  box-shadow: 0 1px 5px rgba(191, 64, 64, 0.5);\n}\n\n.toast .btn-close {\n  width: 20px;\n  ransition: opacity 250ms;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid white;\n  position: absolute;\n  right: .5em;\n  top: .5em;\n  cursor: pointer;\n  opacity: .4;\n  transition: opacity 250ms;\n}\n\n.toast .btn-close:hover {\n  opacity: 1;\n  transition: opacity 250ms;\n}\n\n.toast .btn-close::after {\n  content: '\\2715';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(3);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = "<div class=\"toast\" *ngFor=\"let item of toasts\" [ngClass]=\"item.type\"><div class=\"btn-close\" (click)=\"close(item)\"></div><div class=\"title\">{{ item.title }}</div><div class=\"body\">{{ item.body }}</div></div>";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var toast_man_service_1 = __webpack_require__(0);
var ToastContainer = (function () {
    function ToastContainer(toastMan) {
        this.toastMan = toastMan;
    }
    Object.defineProperty(ToastContainer.prototype, "toasts", {
        get: function () {
            return this.toastMan.toasts;
        },
        enumerable: true,
        configurable: true
    });
    ToastContainer.prototype.close = function (toast) {
        this.toastMan.close(toast);
    };
    ToastContainer = __decorate([
        core_1.Component({
            selector: 'toast-container',
            template: __webpack_require__(6),
            styles: [__webpack_require__(5)],
        }), 
        __metadata('design:paramtypes', [toast_man_service_1.ToastMan])
    ], ToastContainer);
    return ToastContainer;
}());
exports.ToastContainer = ToastContainer;


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var toastr_module_1 = __webpack_require__(2);
exports.ToastrModule = toastr_module_1.ToastrModule;
var toast_man_service_1 = __webpack_require__(0);
exports.ToastMan = toast_man_service_1.ToastMan;


/***/ }
/******/ ])
});
;