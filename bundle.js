/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\na {\n  color: inherit;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*--------------------*/\nbody {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 36px;\n}\n@media (max-width: 720px) {\n  .header {\n    padding: 12px;\n  }\n}\n.header h1 {\n  font-weight: bold;\n  font-size: 36px;\n  color: #45852d;\n}\n@media (max-width: 720px) {\n  .header h1 {\n    font-size: 24px;\n  }\n}\n\n.filter {\n  margin-bottom: 45px;\n}\n.filter_label {\n  font-weight: bold;\n  margin-right: 8px;\n}\n.filter_input {\n  width: 33%;\n  min-width: 418px;\n  height: 50px;\n  padding: 20px;\n  font-size: 16px;\n  border: 1px solid #d8d8d8;\n  box-sizing: border-box;\n  border-radius: 25px;\n}\n@media (max-width: 720px) {\n  .filter_input {\n    min-width: 260px;\n    height: 36px;\n  }\n}\n\n.cards {\n  display: flex;\n  grid-gap: 38px 21px;\n  gap: 38px 21px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.card {\n  background: #f8f8f8;\n  border: 1px solid #d8d8d8;\n  box-sizing: border-box;\n  max-width: 377px;\n}\n.card_img-container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 227px;\n  background: #fff;\n}\n@media (max-width: 380px) {\n  .card_img-container {\n    width: 100vw;\n  }\n}\n.card_img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.card_tag {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 30px;\n  padding: 8px;\n  font-weight: bold;\n  font-size: 12px;\n  color: #fff;\n}\n.card_tag__orange {\n  background: #ec6608;\n}\n.card_tag__blue {\n  background: #006f79;\n}\n.card_description {\n  padding: 20px;\n}\n.card_title {\n  margin-bottom: 6px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.card_subtitle {\n  margin-bottom: 15px;\n}\n.card_price {\n  margin-bottom: 7px;\n}\n.card_price-num {\n  font-weight: bold;\n}\n.card_option {\n  font-size: 14px;\n}\n\n.btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 12px 30px;\n  font-weight: bold;\n  line-height: 24px;\n  letter-spacing: -0.3px;\n  background: #fff;\n  color: #363636;\n  border: 1px solid #d8d8d8;\n  box-sizing: border-box;\n  border-radius: 25px;\n}\n.btn_icon {\n  margin-bottom: 1px;\n  margin-left: 4px;\n  vertical-align: middle;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0 50px;\n  color: #363636;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n@media (max-width: 720px) {\n  .main-container {\n    padding: 0 15px;\n  }\n}\n\n.flex-wrapper-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/nullstyle.scss","webpack://./src/scss/typography.scss","webpack://./src/scss/components/header.scss","webpack://./src/scss/components/filter.scss","webpack://./src/scss/components/card.scss","webpack://./src/scss/components/btn.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB,YAAA;AACA;EAAE,UAAA;EAAW,SAAA;EAAU,SAAA;ADKvB;;ACJA;EAA8E,sBAAA;ADU9E;;ACTA;EAAe,aAAA;ADaf;;ACZA;EAAiB,aAAA;ADgBjB;;ACfA;EAAwB,cAAA;ADmBxB;;AClBA;EAAU,YAAA;EAAY,WAAA;EAAW,eAAA;EAAe,cAAA;EAAc,eAAA;EAAe,0BAAA;EAA0B,2BAAA;EAA2B,8BAAA;AD6BlI;;AC5BA;EAAsB,oBAAA;ADgCtB;;AC/BA;EAAiB,aAAA;ADmCjB;;AClCA;EAAO,eAAA;ADsCP;;ACrCA;EAAyB,UAAA;EAAU,SAAA;AD0CnC;;ACzCA;EAAY,qBAAA;AD6CZ;;AC5CA;EAAQ,qBAAA;ADgDR;;AC/CA;EAAE,cAAA;ADmDF;;AClDA;EAAM,gBAAA;ADsDN;;ACrDA;EAAI,mBAAA;ADyDJ;;ACxDA;EAAkB,kBAAA;EAAkB,oBAAA;AD6DpC;;AC5DA,uBAAA;ACjBA;EACE,sDAAA;EACA,eAAA;AFiFF;;AGnFA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AHsFF;AGrFE;EALF;IAMI,aAAA;EHwFF;AACF;AGvFE;EACE,iBAAA;EACA,eAAA;EACA,cAAA;AHyFJ;AGxFI;EAJF;IAKI,eAAA;EH2FJ;AACF;;AIzGA;EACE,mBAAA;AJ4GF;AI3GE;EACE,iBAAA;EACA,iBAAA;AJ6GJ;AI3GE;EACE,UAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;AJ6GJ;AI5GI;EATF;IAUI,gBAAA;IACA,YAAA;EJ+GJ;AACF;;AKjIA;EACE,aAAA;EACA,mBAAA;EAAA,cAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ALoIF;;AKjIA;EACE,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,gBAAA;ALoIF;AKlIE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;ALoIJ;AKnII;EAPF;IAQI,YAAA;ELsIJ;AACF;AKnIE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;ALqIJ;AKlIE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;ALoIJ;AKlII;EACE,mBAAA;ALoIN;AKlII;EACE,mBAAA;ALoIN;AKhIE;EACE,aAAA;ALkIJ;AK/HE;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;ALiIJ;AK9HE;EACE,mBAAA;ALgIJ;AK7HE;EACE,kBAAA;AL+HJ;AK5HE;EACE,iBAAA;AL8HJ;AK3HE;EACE,eAAA;AL6HJ;;AMtMA;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;ANyMF;AMxME;EACE,kBAAA;EACA,gBAAA;EACA,sBAAA;AN0MJ;;AAhNA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;AAmNF;AAlNE;EAPF;IAQI,eAAA;EAqNF;AACF;;AAlNA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAqNF","sourcesContent":["@import \"nullstyle.scss\";\r\n@import \"typography.scss\";\r\n\r\n@import \"components/header.scss\";\r\n@import \"components/filter.scss\";\r\n@import \"components/card.scss\";\r\n@import \"components/btn.scss\";\r\n\r\n.main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 50px;\r\n  color: #363636;\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  @media (max-width: 720px) {\r\n    padding: 0 15px;\r\n  }\r\n}\r\n\r\n.flex-wrapper-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n","/*Обнуление*/\r\n*{padding: 0;margin: 0;border: 0;}\r\n*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}\r\n:focus,:active{outline: none;}\r\na:focus,a:active{outline: none;}\r\nnav,footer,header,aside{display: block;}\r\nhtml,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}\r\ninput,button,textarea{font-family:inherit;}\r\ninput::-ms-clear{display: none;}\r\nbutton{cursor: pointer;}\r\nbutton::-moz-focus-inner{padding:0;border:0;}\r\na,a:visited{text-decoration: none;}\r\na:hover{text-decoration: none;}\r\na{color: inherit}\r\nul li{list-style: none;}\r\nimg{vertical-align: top;}\r\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}\r\n/*--------------------*/","body {\r\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n}\r\n",".header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 36px;\r\n  @media (max-width: 720px) {\r\n    padding: 12px;\r\n  }\r\n  h1 {\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n    color: #45852d;\r\n    @media (max-width: 720px) {\r\n      font-size: 24px;\r\n    }\r\n  }\r\n}",".filter {\r\n  margin-bottom: 45px;\r\n  &_label {\r\n    font-weight: bold;\r\n    margin-right: 8px;\r\n  }\r\n  &_input {\r\n    width: 33%;\r\n    min-width: 418px;\r\n    height: 50px;\r\n    padding: 20px;\r\n    font-size: 16px;\r\n    border: 1px solid #d8d8d8;\r\n    box-sizing: border-box;\r\n    border-radius: 25px;\r\n    @media (max-width: 720px) {\r\n      min-width: 260px;\r\n      height: 36px;\r\n    }\r\n  }\r\n}\r\n",".cards {\r\n  display: flex;\r\n  gap: 38px 21px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.card {\r\n  background: #f8f8f8;\r\n  border: 1px solid #d8d8d8;\r\n  box-sizing: border-box;\r\n  max-width: 377px;\r\n\r\n  &_img-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 227px;\r\n    background: #fff;\r\n    @media (max-width: 380px) {\r\n      width: 100vw;\r\n    }\r\n  }\r\n\r\n  &_img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  &_tag {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    height: 30px;\r\n    padding: 8px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    color: #fff;\r\n\r\n    &__orange {\r\n      background: #ec6608;\r\n    }\r\n    &__blue {\r\n      background: #006f79;\r\n    }\r\n  }\r\n\r\n  &_description {\r\n    padding: 20px;\r\n  }\r\n\r\n  &_title {\r\n    margin-bottom: 6px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n  }\r\n\r\n  &_subtitle {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  &_price {\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n  &_price-num {\r\n    font-weight: bold;\r\n  }\r\n\r\n  &_option {\r\n    font-size: 14px;\r\n  }\r\n}\r\n",".btn {\r\n  width: fit-content;\r\n  padding: 12px 30px;\r\n  font-weight: bold;\r\n  line-height: 24px;\r\n  letter-spacing: -0.3px;\r\n  background: #fff;\r\n  color: #363636;\r\n  border: 1px solid #d8d8d8;\r\n  box-sizing: border-box;\r\n  border-radius: 25px;\r\n  &_icon {\r\n    margin-bottom: 1px;\r\n    margin-left: 4px;\r\n    vertical-align: middle;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");


'use strict';

const filterField = document.querySelector('#filter');
const cards = document.querySelector('.cards');

const requestURL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onload = () => {
    if (xhr.status !== 200) {
    return;
    }

    const data = JSON.parse(xhr.response);

    filterField.addEventListener('input', () => {
        let filter = filterField.value.toLowerCase();
        cards.innerHTML = '';

        if (filter.length < 3) {
            return data.map(item => createCard(item));
        }

        let filteredCards = data.filter((card) =>  card.title.toLowerCase().indexOf(filter) > -1);
        
        if (filteredCards.length > 0) {     
            return filteredCards.map(item => createCard(item));
        } else {
            cards.innerHTML = 'No results found';
        }

    });

    data.map(item => createCard(item));

    function createCard({ id, title, address, type, price } = data) {

        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const tagContent = type.replace(/([a-z])([A-Z])/g, "$1 $2");
        const tagStyle = (type === 'IndependentLiving')?'card_tag__blue':'card_tag__orange';

        const newCard = document.createElement('div');
        newCard.classList.add('card');

        newCard.innerHTML = `
        <a href="/details/${id}" target="_blank" rel="noopener noreferrer">
            <div class="card_img-container">
                <img class="card_img" src="https://picsum.photos/seed/${id}/400/240" alt="">
                <div class="card_tag ${tagStyle}">
                ${tagContent}
                </div>
            </div>
            <div class="card_description">
                <h2 class="card_title">${title}</h2>
                <p class="card_subtitle">${address}</p>
                <p class="card_price">New Properties for Sale from 
                    <span class="card_price-num">£${price}</span>
                </p>
                <p class="card_option">Shared Ownership Available</p>
            </div>
            </a>
        `;

        cards.append(newCard);
    }

}
xhr.send();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map