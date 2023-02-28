/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lang_ar_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/ar.json */ \"./pages/lang/ar.json\");\n/* harmony import */ var _lang_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/en.json */ \"./pages/lang/en.json\");\n/* harmony import */ var _lang_he_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/he.json */ \"./pages/lang/he.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/hassanhassouna/Desktop/fullstack/EliasRoadMap/Almanshaa/almanshaa/myworkspace/apps/client/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst messages = {\n  ar: _lang_ar_json__WEBPACK_IMPORTED_MODULE_3__,\n  en: _lang_en_json__WEBPACK_IMPORTED_MODULE_4__,\n  he: _lang_he_json__WEBPACK_IMPORTED_MODULE_5__\n};\n\nfunction getDirection(locale) {\n  if (locale === 'ar' || locale === 'he') {\n    return 'rtl';\n  }\n\n  return 'ltr';\n}\n\nconst CustomApp = ({\n  Component,\n  pageProps\n}) => {\n  const {\n    locale\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {\n    locale: locale,\n    messages: messages[locale],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n      className: \"app\",\n      dir: getDirection(locale),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n        theme: {\n          dir: getDirection(locale)\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTU0sUUFBUSxHQUFHO0VBQ2ZKLEVBRGU7RUFFZkMsRUFGZTtFQUdmQyxFQUFFQSw0Q0FBQUE7QUFIYSxDQUFqQjs7QUFNQSxTQUFTRyxZQUFULENBQXNCQyxNQUF0QixFQUE4QjtFQUM1QixJQUFJQSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLElBQWxDLEVBQXdDO0lBQ3RDLE9BQU8sS0FBUDtFQUNEOztFQUNELE9BQU8sS0FBUDtBQUNEOztBQUVELE1BQU1DLFNBQVMsR0FBRyxDQUFDO0VBQUVDLFNBQUY7RUFBYUM7QUFBYixDQUFELEtBQXdDO0VBQ3hELE1BQU07SUFBRUg7RUFBRixJQUFhUixzREFBUyxFQUE1QjtFQUNBLG9CQUNFLDhEQUFDLG9EQUFEO0lBQWMsTUFBTSxFQUFFUSxNQUF0QjtJQUE4QixRQUFRLEVBQUVGLFFBQVEsQ0FBQ0UsTUFBRCxDQUFoRDtJQUFBLHVCQUNFO01BQU0sU0FBUyxFQUFDLEtBQWhCO01BQXNCLEdBQUcsRUFBRUQsWUFBWSxDQUFDQyxNQUFELENBQXZDO01BQUEsdUJBQ0UsOERBQUMsNERBQUQ7UUFBZSxLQUFLLEVBQUU7VUFBRUksR0FBRyxFQUFFTCxZQUFZLENBQUNDLE1BQUQ7UUFBbkIsQ0FBdEI7UUFBQSx1QkFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQVNELENBWEQ7O0FBYUEsaUVBQWVGLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgYXIgZnJvbSAnLi9sYW5nL2FyLmpzb24nO1xuaW1wb3J0IGVuIGZyb20gJy4vbGFuZy9lbi5qc29uJztcbmltcG9ydCBoZSBmcm9tICcuL2xhbmcvaGUuanNvbic7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuY29uc3QgbWVzc2FnZXMgPSB7XG4gIGFyLFxuICBlbixcbiAgaGUsXG59O1xuXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24obG9jYWxlKSB7XG4gIGlmIChsb2NhbGUgPT09ICdhcicgfHwgbG9jYWxlID09PSAnaGUnKSB7XG4gICAgcmV0dXJuICdydGwnO1xuICB9XG4gIHJldHVybiAnbHRyJztcbn1cblxuY29uc3QgQ3VzdG9tQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc1tsb2NhbGVdfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImFwcFwiIGRpcj17Z2V0RGlyZWN0aW9uKGxvY2FsZSl9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17eyBkaXI6IGdldERpcmVjdGlvbihsb2NhbGUpIH19PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvSW50bFByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQXBwO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkludGxQcm92aWRlciIsImFyIiwiZW4iLCJoZSIsIlRoZW1lUHJvdmlkZXIiLCJtZXNzYWdlcyIsImdldERpcmVjdGlvbiIsImxvY2FsZSIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "./pages/lang/ar.json":
/*!****************************!*\
  !*** ./pages/lang/ar.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"page.home.head.title":"مثال على Next.js i18n","page.home.head.meta.description":"مثال Next.js i18n - عربي","page.home.title":"مرحبًا بك في <b> البرنامج التعليمي Next.js i18n </b>","page.home.description":"أنت الآن تستعرض الصفحة الرئيسية بالعربية 🚀","navbar.home":"الصفحة الرئيسية","navbar.about":"عنا","navbar.contact":"اتصل بنا","navbar.services":"خدماتنا"}');

/***/ }),

/***/ "./pages/lang/en.json":
/*!****************************!*\
  !*** ./pages/lang/en.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"page.home.head.title":"Next.js i18n example","page.home.head.meta.description":"Next.js i18n example - English","page.home.title":"Welcome to <b>Next.js i18n tutorial</b>","page.home.description":"You are currently viewing the homepage in English 🚀","navbar.home":"Home","navbar.about":"About","navbar.contact":"Contact","navbar.services":"Services"}');

/***/ }),

/***/ "./pages/lang/he.json":
/*!****************************!*\
  !*** ./pages/lang/he.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"page.home.head.title":"ברוכים הבאים ל next.18 i18n","page.home.head.meta.description":"Next.js i18n דוגמא - עברית","page.home.title":"ברוכים הבאים ל next.18 i18n","page.home.description":"זוהי דוגמא לכיצד להשתמש ב i18n ב next.18","navbar.home":"בית","navbar.about":"אודות","navbar.contact":"צור קשר","navbar.services":"שירותים"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();