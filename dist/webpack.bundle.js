/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(this && this[arg] || arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(this, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(this && this[key] || key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/classnames/bind.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  transition: all 0.5s;\n}\n\nhtml {\n  font-family: \"Poppins\";\n}\n\nh1 {\n  color: #fff;\n}\n\nh2 {\n  font-size: 3em;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/sass/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/app.module.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/app.module.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/rtx-40.jpeg */ \"./src/images/rtx-40.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.fHijuNC_7JatvTCoQRmd,\n.Jx0L7SqQCWNioCgO2FCj {\n  display: flex;\n  color: #fff;\n}\n\n.fHijuNC_7JatvTCoQRmd,\n.KYHOsRLIdkWHkHXak9Br {\n  height: fit-content;\n}\n\n.Jx0L7SqQCWNioCgO2FCj,\n.KYHOsRLIdkWHkHXak9Br {\n  background-color: #1e1f1a;\n}\n\n.Jx0L7SqQCWNioCgO2FCj {\n  width: 100%;\n  padding: 5px 20px;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  position: fixed;\n}\n\n.Jx0L7SqQCWNioCgO2FCj h1 {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n._1M8vg1opqDExSXiso4_Q {\n  width: 60px;\n}\n\n.sY3P6F96A1Lg0SDPohvQ {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.Jx0L7SqQCWNioCgO2FCj .iNUY4hVzPGhyCGgBVPFS {\n  display: none;\n}\n\n.Jx0L7SqQCWNioCgO2FCj .w340mXO_3XQB7LKvh5Rp {\n  display: block;\n}\n\n.fHijuNC_7JatvTCoQRmd {\n  width: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  align-items: center;\n  justify-content: center;\n  padding-top: 50px;\n}\n\n.s1wiMfNIbZNLVWWmoXir {\n  width: 40%;\n  font-size: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.Tw_TVwg9IT1_N0jIWgfy,\n.rHbThbS144mcHt5t0Nvg,\n.CFLa_Mh3lyAm9if9sc0x,\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) .okVafQZ2ITWWWdxgmjsx,\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) img,\n.KYHOsRLIdkWHkHXak9Br,\n.Ok4PI3UyK4tos9wml1FA {\n  width: 100%;\n}\n\n.fHijuNC_7JatvTCoQRmd .CFLa_Mh3lyAm9if9sc0x {\n  padding-left: 60px;\n}\n\n.KYHOsRLIdkWHkHXak9Br {\n  display: grid;\n  grid-template-columns: repeat(4, 269px);\n  padding: 30px;\n  gap: 50px;\n  justify-content: center;\n}\n\n.BgIDAZnLaK3Ut3hq9tzQ,\n.CFLa_Mh3lyAm9if9sc0x,\n.HRMLjgAGGgvJkOeVPK1f:nth-child(10),\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) {\n  background-color: rgba(0, 0, 0, 0.37);\n}\n\n.x2ONZ83lLo4Xg5LdqUHv {\n  color: #2cce2c;\n}\n\n.BgIDAZnLaK3Ut3hq9tzQ,\n.Tw_TVwg9IT1_N0jIWgfy,\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) {\n  color: #fff;\n  display: flex;\n}\n\n.BgIDAZnLaK3Ut3hq9tzQ {\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.CFLa_Mh3lyAm9if9sc0x {\n  height: 100%;\n  padding: 20px;\n}\n\n.Zis0DPG2EQqzjcDmjoFY,\n.mSxZh0sVBCEujNMX2jLM {\n  padding: 10px 20px;\n  border: none;\n  font-weight: 500;\n  font-family: Poppins, sans-serif;\n  background-color: #8bcf1e;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  padding: 0;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  gap: 10px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) h2 {\n  font-size: 30px;\n  margin-bottom: 5px;\n  padding: 20px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) p {\n  font-size: 10px;\n  padding: 20px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(9) .jYEJckBdroIMxP5FYhEI {\n  font-size: 15px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(10) {\n  padding: 0;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(10) h2 {\n  font-size: 30px;\n}\n\n.HRMLjgAGGgvJkOeVPK1f:nth-child(10) .DCivSFgVKmB9NmuXMiNp {\n  padding: 10px;\n  font-size: 15px;\n}\n\n.Zis0DPG2EQqzjcDmjoFY {\n  margin: 10px;\n}\n\n.Zis0DPG2EQqzjcDmjoFY,\n.mSxZh0sVBCEujNMX2jLM {\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.mSxZh0sVBCEujNMX2jLM:hover,\n.Zis0DPG2EQqzjcDmjoFY:hover {\n  background-color: #b3d47e;\n}\n\n.Tw_TVwg9IT1_N0jIWgfy {\n  background-color: #ffffff;\n  color: #5f5f5d;\n  justify-content: center;\n  align-items: center;\n}\n\n.Tw_TVwg9IT1_N0jIWgfy div {\n  display: flex;\n  padding: 50px;\n  gap: 10px;\n  align-items: center;\n}\n\n.Tw_TVwg9IT1_N0jIWgfy .QB2OplO1xmPi2OZC5fOE {\n  width: 5em;\n}\n\n@media only screen and (max-width: 1246px) {\n  .CFLa_Mh3lyAm9if9sc0x {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .fHijuNC_7JatvTCoQRmd .CFLa_Mh3lyAm9if9sc0x {\n    padding-left: 30px;\n  }\n  .KYHOsRLIdkWHkHXak9Br {\n    grid-template-columns: repeat(3, 269px);\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(10) {\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }\n}\n@media only screen and (max-width: 928px) {\n  .s1wiMfNIbZNLVWWmoXir {\n    width: 100%;\n  }\n  .KYHOsRLIdkWHkHXak9Br {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9),\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(10) {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n@media only screen and (max-width: 811px) {\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9) {\n    flex-direction: column;\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9) p {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 574px) {\n  .fHijuNC_7JatvTCoQRmd h2 {\n    margin-top: 40px;\n    font-size: 35px;\n  }\n  .s1wiMfNIbZNLVWWmoXir {\n    width: 100%;\n  }\n  .KYHOsRLIdkWHkHXak9Br {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9),\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(10) {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    flex-direction: column;\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9) p {\n    font-size: 15px;\n  }\n  .Tw_TVwg9IT1_N0jIWgfy div {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 433px) {\n  .fHijuNC_7JatvTCoQRmd h2,\n  .fHijuNC_7JatvTCoQRmd h3 {\n    font-size: 6vw;\n  }\n  .fHijuNC_7JatvTCoQRmd p {\n    font-size: 12px;\n  }\n  .Tw_TVwg9IT1_N0jIWgfy div {\n    font-size: 3vw;\n  }\n}\n@media only screen and (max-width: 413px) {\n  #sSdHSgtGQA6Zpvsy1lGC {\n    transition: ease-in 0.5s;\n  }\n  .F0EZyf3DJkY73GCe2wcX {\n    display: none;\n    transition: ease-out;\n  }\n  .Jx0L7SqQCWNioCgO2FCj {\n    flex-direction: column;\n  }\n  .Jx0L7SqQCWNioCgO2FCj .FClGNXZ1lnhPdBUZWuYb {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n  .Jx0L7SqQCWNioCgO2FCj .iNUY4hVzPGhyCGgBVPFS {\n    display: block;\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9) h2 {\n    font-size: 6vw;\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(9) p {\n    font-size: 10px;\n  }\n  .HRMLjgAGGgvJkOeVPK1f:nth-child(10) .DCivSFgVKmB9NmuXMiNp {\n    font-size: 10px;\n  }\n}`, \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"banner\": `fHijuNC_7JatvTCoQRmd`,\n\t\"navbar\": `Jx0L7SqQCWNioCgO2FCj`,\n\t\"rowlist\": `KYHOsRLIdkWHkHXak9Br`,\n\t\"logo\": `_1M8vg1opqDExSXiso4_Q`,\n\t\"logo-container\": `sY3P6F96A1Lg0SDPohvQ`,\n\t\"bar\": `iNUY4hVzPGhyCGgBVPFS`,\n\t\"reg\": `w340mXO_3XQB7LKvh5Rp`,\n\t\"rtx-info\": `s1wiMfNIbZNLVWWmoXir`,\n\t\"footer\": `Tw_TVwg9IT1_N0jIWgfy`,\n\t\"game\": `rHbThbS144mcHt5t0Nvg`,\n\t\"overlay\": `CFLa_Mh3lyAm9if9sc0x`,\n\t\"row\": `HRMLjgAGGgvJkOeVPK1f`,\n\t\"content\": `okVafQZ2ITWWWdxgmjsx`,\n\t\"rtx30\": `Ok4PI3UyK4tos9wml1FA`,\n\t\"box\": `BgIDAZnLaK3Ut3hq9tzQ`,\n\t\"angle\": `x2ONZ83lLo4Xg5LdqUHv`,\n\t\"button\": `Zis0DPG2EQqzjcDmjoFY`,\n\t\"button2\": `mSxZh0sVBCEujNMX2jLM`,\n\t\"dropdown\": `jYEJckBdroIMxP5FYhEI`,\n\t\"games-content\": `DCivSFgVKmB9NmuXMiNp`,\n\t\"nvidia\": `QB2OplO1xmPi2OZC5fOE`,\n\t\"collapsibleSection\": `sSdHSgtGQA6Zpvsy1lGC`,\n\t\"show\": `F0EZyf3DJkY73GCe2wcX`,\n\t\"top\": `FClGNXZ1lnhPdBUZWuYb`\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/sass/modules/app.module.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/sass/index.scss?");

/***/ }),

/***/ "./src/sass/modules/app.module.scss":
/*!******************************************!*\
  !*** ./src/sass/modules/app.module.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.module.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/app.module.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_module_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/sass/modules/app.module.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/start.js\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _security_HashCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/HashCode */ \"./src/security/HashCode.js\");\n\n\n\n\nconst DOM = document.querySelector('#app');\nDOM.id = (0,_security_HashCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_start__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DOM); // Renders the Element ID\n\n\n//# sourceURL=webpack://standalone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n\n\nfunction Footer(DOM) {\n\tDOM.innerHTML = `\n        <div>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nvidia}' src='nvidia-footer.svg' alt='nvidia' />\n            <p>&copy; copyright 2023 | <b>Waren Gador<b></p> \n        </div>\n    `;\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/components/footer.js?");

/***/ }),

/***/ "./src/js/components/functions/navbar.toggle.js":
/*!******************************************************!*\
  !*** ./src/js/components/functions/navbar.toggle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavToggles: () => (/* binding */ NavToggles)\n/* harmony export */ });\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n\n\nconst NavToggles = () => {\n\tconst NavToggle = document.getElementById('bar');\n\tconst ShowReg = document.getElementById('icons');\n\tconst CollapsibleSection = document.getElementById('collapsibleSection');\n\n\tNavToggle.addEventListener('click', Toggle);\n\n\tfunction Toggle() {\n\t\tCollapsibleSection.classList.toggle(`${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show}`);\n\t\tShowReg.classList.toggle('fa-xmark');\n\t}\n};\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/components/functions/navbar.toggle.js?");

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n/* harmony import */ var _functions_navbar_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/navbar.toggle */ \"./src/js/components/functions/navbar.toggle.js\");\n\n\n\nfunction Navbar(DOM) {\n\tDOM.innerHTML = `\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].top}'>\n            <!-- Logo and title -->\n            <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['logo-container']}'>\n                <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logo}' src='nvidia.png' alt='nvidia logo' />\n                <h1>Gaming Store</h1>\n            </div>\n            <button type='button' id='bar' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bar}'><i id='icons' class='fa-solid fa-bars'></i></button>\n\n        </div>\n            <!-- Collapsible section -->\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show}' id='collapsibleSection'>\n                <button type='button' id='reg' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reg}'>Login / Register</button>\n        </div>\n    `;\n\n\t(0,_functions_navbar_toggle__WEBPACK_IMPORTED_MODULE_1__.NavToggles)();\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/rowlist.js":
/*!**************************************!*\
  !*** ./src/js/components/rowlist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RowList)\n/* harmony export */ });\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n\n\nfunction RowList(DOM) {\n\tDOM.innerHTML = `\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='tv.jpeg' alt='tv shield image' />\n            <p>Shield TV's</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='rtx-40.jpeg' alt='rtx 30' />\n            <p>RTX 40 Series</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='rtx-30.jpeg' alt='rtx 30' />\n            <p>RTX 30 Series</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='gtx-16.jpeg' alt='rtx 30' />\n            <p>GTX Series</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='connectx.jpg' alt='connect x image' />\n            <p>ConnectX SmartNICs</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='linkx.jpg' alt='ethernet link x' />\n            <p>Link X Ethernet</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='switch.jpg' alt='switch image' />\n            <p>Spectrum Switch Series</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtx30}' src='bluefield.jpg' alt='bluefield dpu' />\n            <p>Blue Field DPU Network</p>\n            <button type='button' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button}'>Learn more</button>\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row}'>\n            <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content}'>\n                <h2>Introducing NVIDIA Jetson AGX Orin Industrial </h2>\n                <p>\n                    Embedded edge AI is transforming industrial environments by introducing intelligence\n                    and real-time processing to even the most challenging settings. Edge AI is increasingly \n                    being used in agriculture, construction, energy, aerospace, satellites, the public sector, \n                    and more. With the NVIDIA Jetson edge AI and robotics platform, you can deploy AI and compute\n                    for sensor fusion in these complex environments.\n                    At COMPUTEX 2023, NVIDIA announced the new Jetson AGX Orin Industrial module,\n                    which brings the next level of computing to harsh environments. This new module\n                    extends the capabilities of the previous-generation NVIDIA Jetson AGX Xavier\n                    Industrial and the commercial Jetson AGX Orin modules, by bringing server-class\n                    performance to ruggedized systems.\n                </p>\n                <p class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dropdown}'> <i class=\"fa-solid fa-angle-down ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].angle}\"></i> Quick Links</p>\n            </div>\n            <img src='chipset.png' alt='chipset image' />\n        </div>\n        <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row} ${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box}'>\n            <img class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game}' src='resident.png' alt='game logo' />\n            <h2>Nvidia Games</h2>\n            <p class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['games-content']}'>\n                NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance \n                to help professionals, creators, developers, and students worldwide\n                enhance creative workflows and build, operate, and connect metaverse\n                applications.\n            </p>\n        </div>\n`;\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/components/rowlist.js?");

/***/ }),

/***/ "./src/js/webpage.js":
/*!***************************!*\
  !*** ./src/js/webpage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebpageContent)\n/* harmony export */ });\n/* harmony import */ var _render_webpage_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/webpage.render */ \"./src/render/webpage.render.js\");\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n\n\n\nfunction WebpageContent(DOM) {\n\tDOM.innerHTML = `\n        <nav id='navbar' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].navbar}'></nav>\n        <main>\n            <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].banner}'>\n                <div class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].overlay}'>\n                    <h2>GeForce RTX 40 Series</h2>\n                    <h3>Beyond Fast</h3>\n                    <p class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]['rtx-info']}'>\n                        NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast \n                        for gamers and creators. They're powered by the ultra-efficient \n                        NVIDIA Ada Lovelace architecture which delivers a quantum leap in \n                        both performance and AI-powered graphics. Experience lifelike virtual \n                        worlds with ray tracing and ultra-high FPS gaming with the lowest latency. \n                        Discover revolutionary new ways to create and unprecedented workflow acceleration.\n                    </p>\n                    <button class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button2}'>See more details</button>\n                </div>\n            </div>\n            <div id='rowlist' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rowlist}'></div>\n         \n        </main>\n        <footer id='footer' class='${_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer}'></footer>\n    `;\n\n\t(0,_render_webpage_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/webpage.js?");

/***/ }),

/***/ "./src/render/main.render.js":
/*!***********************************!*\
  !*** ./src/render/main.render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _js_webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/webpage */ \"./src/js/webpage.js\");\n/* harmony import */ var _security_HashCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security/HashCode */ \"./src/security/HashCode.js\");\n\n\n\nfunction Render() {\n\t// Get Render's ID\n\tconst ContainerDOM = document.getElementById('container');\n\tconst Webpage = document.getElementById('webpage');\n\n\t// Hash Applied\n\twindow.addEventListener('DOMContentLoaded', () => {\n\t\tContainerDOM.id = (0,_security_HashCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t});\n\n\t// Render's the JS Component\n\t(0,_js_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Webpage);\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/render/main.render.js?");

/***/ }),

/***/ "./src/render/webpage.render.js":
/*!**************************************!*\
  !*** ./src/render/webpage.render.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Webpage_Render)\n/* harmony export */ });\n/* harmony import */ var _js_components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/components/footer */ \"./src/js/components/footer.js\");\n/* harmony import */ var _js_components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/navbar */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _js_components_rowlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/rowlist */ \"./src/js/components/rowlist.js\");\n/* harmony import */ var _security_HashCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/HashCode */ \"./src/security/HashCode.js\");\n\n\n\n\n\nfunction Webpage_Render() {\n\t// Get Render's ID\n\tconst Nav = document.getElementById('navbar');\n\tconst Row = document.getElementById('rowlist');\n\tconst Foot = document.getElementById('footer');\n\n\t// Hash Applied\n\twindow.addEventListener('DOMContentLoaded', () => {\n\t\tFoot.id = (0,_security_HashCode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t});\n\n\t// Render's the JS Component\n\t(0,_js_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Nav);\n\t(0,_js_components_rowlist__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Row);\n\t(0,_js_components_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Foot);\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/render/webpage.render.js?");

/***/ }),

/***/ "./src/security/HashCode.js":
/*!**********************************!*\
  !*** ./src/security/HashCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UniqueHash)\n/* harmony export */ });\nconst GenerateHashes = new Set();\n\nfunction UniqueHash() {\n\tlet hash;\n\tdo {\n\t\thash = Math.random().toString(36).substring(2);\n\t} while (GenerateHashes.has(hash));\n\tGenerateHashes.add(hash);\n\treturn hash;\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/security/HashCode.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cx: () => (/* binding */ cx),\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/modules/app.module.scss */ \"./src/sass/modules/app.module.scss\");\n/* harmony import */ var _render_main_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/main.render */ \"./src/render/main.render.js\");\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default().bind(_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction Start(DOM) {\n\tconst FontAwesome = document.createElement('script');\n\tFontAwesome.src = 'https://kit.fontawesome.com/6b203b1712.js';\n\tFontAwesome.crossOrigin = 'anonymous';\n\tdocument.head.append(FontAwesome);\n\n\tDOM.innerHTML = `\n        <div id='container'> \n            <div id='webpage'></div>\n        </div>\n\n        `;\n\n\t(0,_render_main_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/start.js?");

/***/ }),

/***/ "./src/images/rtx-40.jpeg":
/*!********************************!*\
  !*** ./src/images/rtx-40.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"212ad73aebf49b0ec854.jpeg\";\n\n//# sourceURL=webpack://standalone-javascript/./src/images/rtx-40.jpeg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;