"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Connect.js":
/*!**************************!*\
  !*** ./pages/Connect.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Connect = (param)=>{\n    let { state  } = param;\n    _s();\n    const [donate, setDonate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { contract  } = state;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const donateMessage = async ()=>{\n            const donate = await contract.getDonners();\n            setDonate(donate);\n        };\n        contract && donateMessage();\n    }, [\n        contract\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"my-10 mx-10 sm:mt-10 md:drop-shadow-lg tracking-wider flex items-center justify-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 sm:py-4 md:px-8 my-20 mx-24 text-center rounded-full bg-yellow-200 w-2/3 \",\n                children: donate.map((donate)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-circular text-l font-semibold text-gray-600 leading-normal\",\n                        children: [\n                            \"connected account :- \",\n                            donate.name\n                        ]\n                    }, Math.random, true, {\n                        fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/Connect.js\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/Connect.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/Connect.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Connect, \"o7biF01Lrpn/U+pecIa/zZYpWPU=\");\n_c = Connect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connect);\nvar _c;\n$RefreshReg$(_c, \"Connect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFNUMsTUFBTUcsVUFBVSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFOztJQUN4QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLEVBQUVNLFNBQVEsRUFBRSxHQUFHSDtJQUVyQkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1NLGdCQUFnQixVQUFZO1lBQ2hDLE1BQU1ILFNBQVMsTUFBTUUsU0FBU0UsVUFBVTtZQUN4Q0gsVUFBVUQ7UUFDWjtRQUNBRSxZQUFZQztJQUNkLEdBQUc7UUFBQ0Q7S0FBUztJQUViLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFRQyxXQUFVO3NCQUNqQiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pOLE9BQU9RLEdBQUcsQ0FBQyxDQUFDUixTQUFXO29CQUN0QixxQkFDRSw4REFBQ1M7d0JBRUNILFdBQVU7OzRCQUNYOzRCQUN1Qk4sT0FBT1UsSUFBSTs7dUJBSDVCQyxLQUFLQyxNQUFNOzs7OztnQkFNdEI7Ozs7Ozs7Ozs7OztBQUtWO0dBOUJNZDtLQUFBQTtBQWdDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db25uZWN0LmpzPzQ0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb25uZWN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbZG9uYXRlLCBzZXREb25hdGVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IGNvbnRyYWN0IH0gPSBzdGF0ZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRvbmF0ZU1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkb25hdGUgPSBhd2FpdCBjb250cmFjdC5nZXREb25uZXJzKCk7XG4gICAgICBzZXREb25hdGUoZG9uYXRlKTtcbiAgICB9O1xuICAgIGNvbnRyYWN0ICYmIGRvbmF0ZU1lc3NhZ2UoKTtcbiAgfSwgW2NvbnRyYWN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXktMTAgbXgtMTAgc206bXQtMTAgbWQ6ZHJvcC1zaGFkb3ctbGcgdHJhY2tpbmctd2lkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweS00IG1kOnB4LTggbXktMjAgbXgtMjQgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXllbGxvdy0yMDAgIHctMi8zIFwiPlxuICAgICAgICAgIHtkb25hdGUubWFwKChkb25hdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWNpcmN1bGFyIHRleHQtbCBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgbGVhZGluZy1ub3JtYWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkIGFjY291bnQgOi0ge2RvbmF0ZS5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbm5lY3QiLCJzdGF0ZSIsImRvbmF0ZSIsInNldERvbmF0ZSIsImNvbnRyYWN0IiwiZG9uYXRlTWVzc2FnZSIsImdldERvbm5lcnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwic3BhbiIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Connect.js\n"));

/***/ })

});