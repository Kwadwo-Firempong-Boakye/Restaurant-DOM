/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./VarelaRound-Regular.ttf */ "./src/VarelaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-size: 16px;\n\tfont-family: VarelaRound, sans-serif;\n\tbackground: #fff;\n\t--main-orange: #ff7629;\n\t--dark-grey-black: rgb(42, 42, 42);\n\t--hover-yellow: #ffdb29;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n@font-face {\n\tfont-family: \"VarelaRound\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nnav {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 90px;\n\tborder-bottom: 2px solid #f5f5f5;\n\tmax-width: 1280px;\n\tmargin: auto;\n\tpadding: 0 1rem;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 15;\n}\n\n.logo-area,\n.menu {\n\tdisplay: flex;\n\talign-items: center;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.menu {\n\tgap: 1.5rem;\n}\n\n.hamburger {\n\tmargin-top: 6px;\n\tmargin-right: 1rem;\n\tcolor: #ff7629;\n\tdisplay: none;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.hamburger:hover {\n\ttransform: scaleY(1.3);\n}\n\n.logo-area img {\n\tposition: relative;\n\tbottom: 1rem;\n\toverflow: hidden;\n}\n\n.logo-area p {\n\twidth: 100%;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tletter-spacing: 0.5px;\n\ttransition: all 0.5s ease-in;\n\tmargin: 0;\n\twhite-space: nowrap;\n}\n\n.logo-area p:hover {\n\tcolor: var(--main-orange);\n}\n\n.menu p {\n\tfont-size: 1.1rem;\n\ttransition: all 0.2s ease-in-out;\n\tmargin: 0;\n}\n\n.menu p:hover {\n\tcolor: var(--main-orange);\n\ttransform: translateY(-1px);\n}\n\n.order-button,\n.git-button,\n.hero-button {\n\tborder-radius: 1rem;\n\tborder: 1px solid #f2f2f2;\n\tpadding: 0.75rem 1.2rem;\n\tcolor: #fff;\n\tfont-size: 1.1rem;\n\tfont-family: VarelaRound;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.order-button {\n\tbackground-color: var(--main-orange);\n}\n\n.order-button:hover,\n.git-button:hover {\n\ttransform: scale(1.05);\n\tbackground-color: var(--hover-yellow);\n\tcolor: var(--dark-grey-black);\n}\n\n.git-button {\n\tbackground-color: var(--dark-grey-black);\n}\n\n.new-menu {\n\tfont-size: 1.2rem;\n\ttransition: all 0.5s ease-out;\n\tbackground: #fff;\n\tposition: absolute;\n\twidth: 100vw;\n\tz-index: 3;\n\tborder-bottom: 2px solid #f5f5f5;\n\ttop: -500px;\n}\n\n.new-menu p {\n\tpadding: 1rem 1.75rem;\n\tcursor: pointer;\n\tmargin: 0;\n\tborder-bottom: 2px solid #f5f5f5;\n}\n\n.new-menu p:hover {\n\tbackground: var(--main-orange);\n}\n\nmain {\n\tbackground: #fcfcfc;\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: relative;\n}\n\n.main-background {\n\theight: 100%;\n\tposition: absolute;\n\tleft: 60vw;\n\tright: 0;\n\tz-index: 1;\n\tbackground: #ffa26c;\n\topacity: 1;\n\tbackground-image: radial-gradient(circle at center center, #ffdb29, #ffac7c),\n\t\trepeating-radial-gradient(\n\t\t\tcircle at center center,\n\t\t\t#ffdb29,\n\t\t\t#ffdb29,\n\t\t\t32px,\n\t\t\ttransparent 96px,\n\t\t\ttransparent 64px\n\t\t);\n\tbackground-blend-mode: multiply;\n}\n\n.hero-area {\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 2;\n\tmax-width: 1280px;\n\talign-items: center;\n\tjustify-content: center;\n\ttop: 10vh;\n\tmargin: auto;\n}\n\n.hero-text {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tmargin: 0 0 0 2rem;\n\tmax-width: 50%;\n}\n\n.hero-heading,\n.hero-subtext,\n.hero-button-area {\n\tmargin: 0;\n\tmax-width: 80%;\n}\n\n.hero-heading {\n\tfont-size: 4rem;\n}\n\n.hero-heading span {\n\tcolor: var(--main-orange);\n}\n\n.hero-subtext {\n\tfont-size: 1.1rem;\n\ttext-align: justify;\n\tcolor: var(--dark-grey-black);\n\tmax-width: 75%;\n}\n\n.hero-button-area {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.hero-button:hover {\n\tpadding: 0.75rem 2.5rem;\n\tborder-radius: 1.5rem;\n\tbox-shadow: 2px 2px 5px lightgray;\n}\n\n.order-now {\n\tcolor: #fff;\n\tbackground-color: var(--main-orange);\n}\n\n.see-menu {\n\tcolor: #000;\n\tbackground-color: var(--hover-yellow);\n}\n\n.hero-images {\n\tmargin: 0 3rem 0 0;\n\twidth: 50%;\n}\n\n.hero-images img {\n\tobject-fit: cover;\n\tborder-radius: 1rem;\n\ttransform: rotate(-2deg);\n\twidth: 110%;\n\theight: auto;\n\tmin-height: 500px;\n\tposition: relative;\n\tright: 70px;\n}\n\n@media only screen and (max-width: 1024px) {\n\t.menu p {\n\t\tdisplay: none;\n\t}\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\t.hero-heading {\n\t\tfont-size: 3.25rem;\n\t}\n\t.hamburger:hover {\n\t\ttransform: scaleY(1);\n\t}\n\t.hero-images img {\n\t\tright: 10px;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.order-button,\n\t.git-button {\n\t\tdisplay: none;\n\t}\n\n\t.hero-area {\n\t\tflex-direction: column;\n\t\tbottom: 0;\n\t\tgap: 3rem;\n\t\twidth: 100vw;\n\t\talign-items: flex-start;\n\t}\n\n\t.hero-text {\n\t\tmax-width: 100%;\n\t\talign-items: flex-start;\n\t}\n\n\t.hero-heading {\n\t\tfont-size: 2.95rem;\n\t}\n\n\t.hero-heading,\n\t.hero-subtext,\n\t.hero-button-area {\n\t\tmax-width: 85%;\n\t}\n\n\n\t.main-background {\n\t\tleft: 0;\n\t\ttop: calc(100vh - 150px);\n\t\tmax-height: 50vw;\n\t}\n\n\t.hero-images {\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.hero-images img {\n\t\tright: 0;\n\t\twidth: 100%;\n\t\tmin-height: fit-content;\n\t}\n}\n\n@media only screen and (min-width: 1000px) {\n\t.new-menu {\n\t\tdisplay: none;\n\t}\n}\n\n/*small phones*/\n\n@media only screen and (max-height: 750px) {\n\t.main-background {\n\t\ttop: calc(100vh);\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\tfont-size: 16px;\n\tfont-family: VarelaRound, sans-serif;\n\tbackground: #fff;\n\t--main-orange: #ff7629;\n\t--dark-grey-black: rgb(42, 42, 42);\n\t--hover-yellow: #ffdb29;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n@font-face {\n\tfont-family: \"VarelaRound\";\n\tsrc: url(./VarelaRound-Regular.ttf);\n}\n\nnav {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 90px;\n\tborder-bottom: 2px solid #f5f5f5;\n\tmax-width: 1280px;\n\tmargin: auto;\n\tpadding: 0 1rem;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 15;\n}\n\n.logo-area,\n.menu {\n\tdisplay: flex;\n\talign-items: center;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.menu {\n\tgap: 1.5rem;\n}\n\n.hamburger {\n\tmargin-top: 6px;\n\tmargin-right: 1rem;\n\tcolor: #ff7629;\n\tdisplay: none;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.hamburger:hover {\n\ttransform: scaleY(1.3);\n}\n\n.logo-area img {\n\tposition: relative;\n\tbottom: 1rem;\n\toverflow: hidden;\n}\n\n.logo-area p {\n\twidth: 100%;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tletter-spacing: 0.5px;\n\ttransition: all 0.5s ease-in;\n\tmargin: 0;\n\twhite-space: nowrap;\n}\n\n.logo-area p:hover {\n\tcolor: var(--main-orange);\n}\n\n.menu p {\n\tfont-size: 1.1rem;\n\ttransition: all 0.2s ease-in-out;\n\tmargin: 0;\n}\n\n.menu p:hover {\n\tcolor: var(--main-orange);\n\ttransform: translateY(-1px);\n}\n\n.order-button,\n.git-button,\n.hero-button {\n\tborder-radius: 1rem;\n\tborder: 1px solid #f2f2f2;\n\tpadding: 0.75rem 1.2rem;\n\tcolor: #fff;\n\tfont-size: 1.1rem;\n\tfont-family: VarelaRound;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.order-button {\n\tbackground-color: var(--main-orange);\n}\n\n.order-button:hover,\n.git-button:hover {\n\ttransform: scale(1.05);\n\tbackground-color: var(--hover-yellow);\n\tcolor: var(--dark-grey-black);\n}\n\n.git-button {\n\tbackground-color: var(--dark-grey-black);\n}\n\n.new-menu {\n\tfont-size: 1.2rem;\n\ttransition: all 0.5s ease-out;\n\tbackground: #fff;\n\tposition: absolute;\n\twidth: 100vw;\n\tz-index: 3;\n\tborder-bottom: 2px solid #f5f5f5;\n\ttop: -500px;\n}\n\n.new-menu p {\n\tpadding: 1rem 1.75rem;\n\tcursor: pointer;\n\tmargin: 0;\n\tborder-bottom: 2px solid #f5f5f5;\n}\n\n.new-menu p:hover {\n\tbackground: var(--main-orange);\n}\n\nmain {\n\tbackground: #fcfcfc;\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: relative;\n}\n\n.main-background {\n\theight: 100%;\n\tposition: absolute;\n\tleft: 60vw;\n\tright: 0;\n\tz-index: 1;\n\tbackground: #ffa26c;\n\topacity: 1;\n\tbackground-image: radial-gradient(circle at center center, #ffdb29, #ffac7c),\n\t\trepeating-radial-gradient(\n\t\t\tcircle at center center,\n\t\t\t#ffdb29,\n\t\t\t#ffdb29,\n\t\t\t32px,\n\t\t\ttransparent 96px,\n\t\t\ttransparent 64px\n\t\t);\n\tbackground-blend-mode: multiply;\n}\n\n.hero-area {\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 2;\n\tmax-width: 1280px;\n\talign-items: center;\n\tjustify-content: center;\n\ttop: 10vh;\n\tmargin: auto;\n}\n\n.hero-text {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tmargin: 0 0 0 2rem;\n\tmax-width: 50%;\n}\n\n.hero-heading,\n.hero-subtext,\n.hero-button-area {\n\tmargin: 0;\n\tmax-width: 80%;\n}\n\n.hero-heading {\n\tfont-size: 4rem;\n}\n\n.hero-heading span {\n\tcolor: var(--main-orange);\n}\n\n.hero-subtext {\n\tfont-size: 1.1rem;\n\ttext-align: justify;\n\tcolor: var(--dark-grey-black);\n\tmax-width: 75%;\n}\n\n.hero-button-area {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.hero-button:hover {\n\tpadding: 0.75rem 2.5rem;\n\tborder-radius: 1.5rem;\n\tbox-shadow: 2px 2px 5px lightgray;\n}\n\n.order-now {\n\tcolor: #fff;\n\tbackground-color: var(--main-orange);\n}\n\n.see-menu {\n\tcolor: #000;\n\tbackground-color: var(--hover-yellow);\n}\n\n.hero-images {\n\tmargin: 0 3rem 0 0;\n\twidth: 50%;\n}\n\n.hero-images img {\n\tobject-fit: cover;\n\tborder-radius: 1rem;\n\ttransform: rotate(-2deg);\n\twidth: 110%;\n\theight: auto;\n\tmin-height: 500px;\n\tposition: relative;\n\tright: 70px;\n}\n\n@media only screen and (max-width: 1024px) {\n\t.menu p {\n\t\tdisplay: none;\n\t}\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\t.hero-heading {\n\t\tfont-size: 3.25rem;\n\t}\n\t.hamburger:hover {\n\t\ttransform: scaleY(1);\n\t}\n\t.hero-images img {\n\t\tright: 10px;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.order-button,\n\t.git-button {\n\t\tdisplay: none;\n\t}\n\n\t.hero-area {\n\t\tflex-direction: column;\n\t\tbottom: 0;\n\t\tgap: 3rem;\n\t\twidth: 100vw;\n\t\talign-items: flex-start;\n\t}\n\n\t.hero-text {\n\t\tmax-width: 100%;\n\t\talign-items: flex-start;\n\t}\n\n\t.hero-heading {\n\t\tfont-size: 2.95rem;\n\t}\n\n\t.hero-heading,\n\t.hero-subtext,\n\t.hero-button-area {\n\t\tmax-width: 85%;\n\t}\n\n\n\t.main-background {\n\t\tleft: 0;\n\t\ttop: calc(100vh - 150px);\n\t\tmax-height: 50vw;\n\t}\n\n\t.hero-images {\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.hero-images img {\n\t\tright: 0;\n\t\twidth: 100%;\n\t\tmin-height: fit-content;\n\t}\n}\n\n@media only screen and (min-width: 1000px) {\n\t.new-menu {\n\t\tdisplay: none;\n\t}\n}\n\n/*small phones*/\n\n@media only screen and (max-height: 750px) {\n\t.main-background {\n\t\ttop: calc(100vh);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/VarelaRound-Regular.ttf":
/*!*************************************!*\
  !*** ./src/VarelaRound-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b0ad79431843e696f58.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


const homePageDOM = (() => {
	const hamburger = document.querySelector(".hamburger");
	const mobileMenu = document.querySelector(".new-menu");
	return { hamburger, mobileMenu };
})();

const homePageEvents = (() => {
	homePageDOM.hamburger.addEventListener("click", (e) => {
		showMobileMenu(e);
	});
	window.addEventListener("click", hideMobileMenu);
})();

function showMobileMenu(e) {
	e.stopPropagation();
	if (homePageDOM.mobileMenu.style.top == "-500px") {
		homePageDOM.mobileMenu.style.top = "96px";
	} else {
		homePageDOM.mobileMenu.style.top = "-500px";
	}
}

function hideMobileMenu() {
	if (homePageDOM.mobileMenu.style.top != "-500px") {
		homePageDOM.mobileMenu.style.top = "-500px";
	}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9WYXJlbGFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYVJvdW5kLCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0LS1tYWluLW9yYW5nZTogI2ZmNzYyOTtcXG5cXHQtLWRhcmstZ3JleS1ibGFjazogcmdiKDQyLCA0MiwgNDIpO1xcblxcdC0taG92ZXIteWVsbG93OiAjZmZkYjI5O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJWYXJlbGFSb3VuZFxcXCI7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0aGVpZ2h0OiA5MHB4O1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcblxcdG1heC13aWR0aDogMTI4MHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMTU7XFxufVxcblxcbi5sb2dvLWFyZWEsXFxuLm1lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG5cXHRnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0bWFyZ2luLXRvcDogNnB4O1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRjb2xvcjogI2ZmNzYyOTtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgxLjMpO1xcbn1cXG5cXG4ubG9nby1hcmVhIGltZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMXJlbTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcblxcdG1hcmdpbjogMDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubG9nby1hcmVhIHA6aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxufVxcblxcbi5tZW51IHAge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnUgcDpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5vcmRlci1idXR0b24sXFxuLmdpdC1idXR0b24sXFxuLmhlcm8tYnV0dG9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxuXFx0cGFkZGluZzogMC43NXJlbSAxLjJyZW07XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYVJvdW5kO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3JkZXItYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxufVxcblxcbi5vcmRlci1idXR0b246aG92ZXIsXFxuLmdpdC1idXR0b246aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIteWVsbG93KTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1ncmV5LWJsYWNrKTtcXG59XFxuXFxuLmdpdC1idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleS1ibGFjayk7XFxufVxcblxcbi5uZXctbWVudSB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdHotaW5kZXg6IDM7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XFxuXFx0dG9wOiAtNTAwcHg7XFxufVxcblxcbi5uZXctbWVudSBwIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuNzVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG1hcmdpbjogMDtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcXG59XFxuXFxuLm5ldy1tZW51IHA6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcXG59XFxuXFxubWFpbiB7XFxuXFx0YmFja2dyb3VuZDogI2ZjZmNmYztcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluLWJhY2tncm91bmQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogNjB2dztcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJhY2tncm91bmQ6ICNmZmEyNmM7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciBjZW50ZXIsICNmZmRiMjksICNmZmFjN2MpLFxcblxcdFxcdHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoXFxuXFx0XFx0XFx0Y2lyY2xlIGF0IGNlbnRlciBjZW50ZXIsXFxuXFx0XFx0XFx0I2ZmZGIyOSxcXG5cXHRcXHRcXHQjZmZkYjI5LFxcblxcdFxcdFxcdDMycHgsXFxuXFx0XFx0XFx0dHJhbnNwYXJlbnQgOTZweCxcXG5cXHRcXHRcXHR0cmFuc3BhcmVudCA2NHB4XFxuXFx0XFx0KTtcXG5cXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn1cXG5cXG4uaGVyby1hcmVhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdG1heC13aWR0aDogMTI4MHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0dG9wOiAxMHZoO1xcblxcdG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG5cXHRtYXJnaW46IDAgMCAwIDJyZW07XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5oZXJvLWhlYWRpbmcsXFxuLmhlcm8tc3VidGV4dCxcXG4uaGVyby1idXR0b24tYXJlYSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4uaGVyby1oZWFkaW5nIHtcXG5cXHRmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5oZXJvLWhlYWRpbmcgc3BhbiB7XFxuXFx0Y29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXG59XFxuXFxuLmhlcm8tc3VidGV4dCB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0dGV4dC1hbGlnbjoganVzdGlmeTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1ncmV5LWJsYWNrKTtcXG5cXHRtYXgtd2lkdGg6IDc1JTtcXG59XFxuXFxuLmhlcm8tYnV0dG9uLWFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVyby1idXR0b246aG92ZXIge1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMi41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDVweCBsaWdodGdyYXk7XFxufVxcblxcbi5vcmRlci1ub3cge1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXG59XFxuXFxuLnNlZS1tZW51IHtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci15ZWxsb3cpO1xcbn1cXG5cXG4uaGVyby1pbWFnZXMge1xcblxcdG1hcmdpbjogMCAzcmVtIDAgMDtcXG5cXHR3aWR0aDogNTAlO1xcbn1cXG5cXG4uaGVyby1pbWFnZXMgaW1nIHtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcdHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcXG5cXHR3aWR0aDogMTEwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWluLWhlaWdodDogNTAwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHJpZ2h0OiA3MHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcblxcdC5tZW51IHAge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5oYW1idXJnZXIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG5cXHQuaGVyby1oZWFkaW5nIHtcXG5cXHRcXHRmb250LXNpemU6IDMuMjVyZW07XFxuXFx0fVxcblxcdC5oYW1idXJnZXI6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcblxcdH1cXG5cXHQuaGVyby1pbWFnZXMgaW1nIHtcXG5cXHRcXHRyaWdodDogMTBweDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQub3JkZXItYnV0dG9uLFxcblxcdC5naXQtYnV0dG9uIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQuaGVyby1hcmVhIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHRnYXA6IDNyZW07XFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdH1cXG5cXG5cXHQuaGVyby10ZXh0IHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0fVxcblxcblxcdC5oZXJvLWhlYWRpbmcge1xcblxcdFxcdGZvbnQtc2l6ZTogMi45NXJlbTtcXG5cXHR9XFxuXFxuXFx0Lmhlcm8taGVhZGluZyxcXG5cXHQuaGVyby1zdWJ0ZXh0LFxcblxcdC5oZXJvLWJ1dHRvbi1hcmVhIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDg1JTtcXG5cXHR9XFxuXFxuXFxuXFx0Lm1haW4tYmFja2dyb3VuZCB7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHR0b3A6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxuXFx0XFx0bWF4LWhlaWdodDogNTB2dztcXG5cXHR9XFxuXFxuXFx0Lmhlcm8taW1hZ2VzIHtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaGVyby1pbWFnZXMgaW1nIHtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuXFx0Lm5ldy1tZW51IHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLypzbWFsbCBwaG9uZXMqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XFxuXFx0Lm1haW4tYmFja2dyb3VuZCB7XFxuXFx0XFx0dG9wOiBjYWxjKDEwMHZoKTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxlQUFlO0NBQ2Ysb0NBQW9DO0NBQ3BDLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsa0NBQWtDO0NBQ2xDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsNENBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGdDQUFnQztDQUNoQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7Q0FD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RUFDWix1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBOzs7RUFHQyxjQUFjO0NBQ2Y7OztDQUdBO0VBQ0MsT0FBTztFQUNQLHdCQUF3QjtFQUN4QixnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsY0FBYztDQUNmOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFdBQVc7RUFDWCx1QkFBdUI7Q0FDeEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUEsZUFBZTs7QUFFZjtDQUNDO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhUm91bmQsIHNhbnMtc2VyaWY7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHQtLW1haW4tb3JhbmdlOiAjZmY3NjI5O1xcblxcdC0tZGFyay1ncmV5LWJsYWNrOiByZ2IoNDIsIDQyLCA0Mik7XFxuXFx0LS1ob3Zlci15ZWxsb3c6ICNmZmRiMjk7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIlZhcmVsYVJvdW5kXFxcIjtcXG5cXHRzcmM6IHVybCguL1ZhcmVsYVJvdW5kLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGhlaWdodDogOTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcXG5cXHRtYXgtd2lkdGg6IDEyODBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMCAxcmVtO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDE1O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5tZW51IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuXFx0Z2FwOiAxLjVyZW07XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdG1hcmdpbi10b3A6IDZweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0Y29sb3I6ICNmZjc2Mjk7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhhbWJ1cmdlcjpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4zKTtcXG59XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDFyZW07XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxvZ28tYXJlYSBwIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmxvZ28tYXJlYSBwOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcbn1cXG5cXG4ubWVudSBwIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5tZW51IHA6aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ub3JkZXItYnV0dG9uLFxcbi5naXQtYnV0dG9uLFxcbi5oZXJvLWJ1dHRvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMS4ycmVtO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGFSb3VuZDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm9yZGVyLWJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcbn1cXG5cXG4ub3JkZXItYnV0dG9uOmhvdmVyLFxcbi5naXQtYnV0dG9uOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXllbGxvdyk7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstZ3JleS1ibGFjayk7XFxufVxcblxcbi5naXQtYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXktYmxhY2spO1xcbn1cXG5cXG4ubmV3LW1lbnUge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHR6LWluZGV4OiAzO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcblxcdHRvcDogLTUwMHB4O1xcbn1cXG5cXG4ubmV3LW1lbnUgcCB7XFxuXFx0cGFkZGluZzogMXJlbSAxLjc1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XFxufVxcblxcbi5uZXctbWVudSBwOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxufVxcblxcbm1haW4ge1xcblxcdGJhY2tncm91bmQ6ICNmY2ZjZmM7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbi1iYWNrZ3JvdW5kIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDYwdnc7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZhMjZjO1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIgY2VudGVyLCAjZmZkYjI5LCAjZmZhYzdjKSxcXG5cXHRcXHRyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KFxcblxcdFxcdFxcdGNpcmNsZSBhdCBjZW50ZXIgY2VudGVyLFxcblxcdFxcdFxcdCNmZmRiMjksXFxuXFx0XFx0XFx0I2ZmZGIyOSxcXG5cXHRcXHRcXHQzMnB4LFxcblxcdFxcdFxcdHRyYW5zcGFyZW50IDk2cHgsXFxuXFx0XFx0XFx0dHJhbnNwYXJlbnQgNjRweFxcblxcdFxcdCk7XFxuXFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59XFxuXFxuLmhlcm8tYXJlYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRtYXgtd2lkdGg6IDEyODBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHRvcDogMTB2aDtcXG5cXHRtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZXJvLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0bWFyZ2luOiAwIDAgMCAycmVtO1xcblxcdG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uaGVyby1oZWFkaW5nLFxcbi5oZXJvLXN1YnRleHQsXFxuLmhlcm8tYnV0dG9uLWFyZWEge1xcblxcdG1hcmdpbjogMDtcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLmhlcm8taGVhZGluZyB7XFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaGVyby1oZWFkaW5nIHNwYW4ge1xcblxcdGNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxufVxcblxcbi5oZXJvLXN1YnRleHQge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdHRleHQtYWxpZ246IGp1c3RpZnk7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstZ3JleS1ibGFjayk7XFxuXFx0bWF4LXdpZHRoOiA3NSU7XFxufVxcblxcbi5oZXJvLWJ1dHRvbi1hcmVhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmhlcm8tYnV0dG9uOmhvdmVyIHtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCA1cHggbGlnaHRncmF5O1xcbn1cXG5cXG4ub3JkZXItbm93IHtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxufVxcblxcbi5zZWUtbWVudSB7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIteWVsbG93KTtcXG59XFxuXFxuLmhlcm8taW1hZ2VzIHtcXG5cXHRtYXJnaW46IDAgM3JlbSAwIDA7XFxuXFx0d2lkdGg6IDUwJTtcXG59XFxuXFxuLmhlcm8taW1hZ2VzIGltZyB7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuXFx0d2lkdGg6IDExMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRyaWdodDogNzBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG5cXHQubWVudSBwIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuaGFtYnVyZ2VyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHR9XFxuXFx0Lmhlcm8taGVhZGluZyB7XFxuXFx0XFx0Zm9udC1zaXplOiAzLjI1cmVtO1xcblxcdH1cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHR9XFxuXFx0Lmhlcm8taW1hZ2VzIGltZyB7XFxuXFx0XFx0cmlnaHQ6IDEwcHg7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Lm9yZGVyLWJ1dHRvbixcXG5cXHQuZ2l0LWJ1dHRvbiB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0Lmhlcm8tYXJlYSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0XFx0Z2FwOiAzcmVtO1xcblxcdFxcdHdpZHRoOiAxMDB2dztcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHR9XFxuXFxuXFx0Lmhlcm8tdGV4dCB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdH1cXG5cXG5cXHQuaGVyby1oZWFkaW5nIHtcXG5cXHRcXHRmb250LXNpemU6IDIuOTVyZW07XFxuXFx0fVxcblxcblxcdC5oZXJvLWhlYWRpbmcsXFxuXFx0Lmhlcm8tc3VidGV4dCxcXG5cXHQuaGVyby1idXR0b24tYXJlYSB7XFxuXFx0XFx0bWF4LXdpZHRoOiA4NSU7XFxuXFx0fVxcblxcblxcblxcdC5tYWluLWJhY2tncm91bmQge1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0dG9wOiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcblxcdFxcdG1heC1oZWlnaHQ6IDUwdnc7XFxuXFx0fVxcblxcblxcdC5oZXJvLWltYWdlcyB7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0Lmhlcm8taW1hZ2VzIGltZyB7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcblxcdC5uZXctbWVudSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qc21hbGwgcGhvbmVzKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xcblxcdC5tYWluLWJhY2tncm91bmQge1xcblxcdFxcdHRvcDogY2FsYygxMDB2aCk7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGhvbWVQYWdlRE9NID0gKCgpID0+IHtcblx0Y29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG5cdGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1tZW51XCIpO1xuXHRyZXR1cm4geyBoYW1idXJnZXIsIG1vYmlsZU1lbnUgfTtcbn0pKCk7XG5cbmNvbnN0IGhvbWVQYWdlRXZlbnRzID0gKCgpID0+IHtcblx0aG9tZVBhZ2VET00uaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHNob3dNb2JpbGVNZW51KGUpO1xuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTW9iaWxlTWVudSk7XG59KSgpO1xuXG5mdW5jdGlvbiBzaG93TW9iaWxlTWVudShlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGlmIChob21lUGFnZURPTS5tb2JpbGVNZW51LnN0eWxlLnRvcCA9PSBcIi01MDBweFwiKSB7XG5cdFx0aG9tZVBhZ2VET00ubW9iaWxlTWVudS5zdHlsZS50b3AgPSBcIjk2cHhcIjtcblx0fSBlbHNlIHtcblx0XHRob21lUGFnZURPTS5tb2JpbGVNZW51LnN0eWxlLnRvcCA9IFwiLTUwMHB4XCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUoKSB7XG5cdGlmIChob21lUGFnZURPTS5tb2JpbGVNZW51LnN0eWxlLnRvcCAhPSBcIi01MDBweFwiKSB7XG5cdFx0aG9tZVBhZ2VET00ubW9iaWxlTWVudS5zdHlsZS50b3AgPSBcIi01MDBweFwiO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=