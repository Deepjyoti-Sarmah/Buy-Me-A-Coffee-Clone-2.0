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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _contracts_BuyMeCoffee_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts/BuyMeCoffee.json */ \"./pages/contracts/BuyMeCoffee.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.js */ \"./pages/Navbar.js\");\n/* harmony import */ var _Hero_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hero.js */ \"./pages/Hero.js\");\n/* harmony import */ var _Connect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Connect.js */ \"./pages/Connect.js\");\n/* harmony import */ var _Buy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Buy.js */ \"./pages/Buy.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        provider: null,\n        signer: null,\n        contract: null\n    });\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"None\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const connectWallet = async ()=>{\n            const contrcatABI = _contracts_BuyMeCoffee_json__WEBPACK_IMPORTED_MODULE_2__.abi;\n            try {\n                const { ethereum  } = window;\n                if (ethereum) {\n                    const account = await ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    window.ethereum.on(\"chainChanged\", ()=>{\n                        window.location.reload();\n                    });\n                    window.ethereum.on(\"accountsChanged\", ()=>{\n                        window.location.reload();\n                    });\n                    const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(ethereum);\n                    const signer = provider.getSigner();\n                    const contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_1__.contractAddress, contrcatABI, signer);\n                    setAccount(account);\n                    setState({\n                        provider,\n                        signer,\n                        contract\n                    });\n                } else {\n                    alert(\"Please install metamask\");\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        connectWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Connect_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                state: c\n            }, void 0, false, {\n                fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buy_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                state: state\n            }, void 0, false, {\n                fileName: \"/home/deepjyotisarmah/Documents/Blockchain/Buy-Me-Coffee/client/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"e8aA/xQQcRZRqz1ZwCPGCTdvbqw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNBO0FBQ2Y7QUFDWTtBQUNYO0FBQ0o7QUFDTTtBQUNSO0FBRVosU0FBU1MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO1FBQ2pDUyxVQUFVLElBQUk7UUFDZEMsUUFBUSxJQUFJO1FBQ1pDLFVBQVUsSUFBSTtJQUNoQjtJQUVBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1hLGdCQUFnQixVQUFZO1lBQ2hDLE1BQU1DLGNBQWNqQiw0REFBTztZQUUzQixJQUFJO2dCQUNGLE1BQU0sRUFBRWtCLFNBQVEsRUFBRSxHQUFHQztnQkFFckIsSUFBSUQsVUFBVTtvQkFDWixNQUFNSixVQUFVLE1BQU1JLFNBQVNFLE9BQU8sQ0FBQzt3QkFDckNDLFFBQVE7b0JBQ1Y7b0JBRUFGLE9BQU9ELFFBQVEsQ0FBQ0ksRUFBRSxDQUFDLGdCQUFnQixJQUFNO3dCQUN2Q0gsT0FBT0ksUUFBUSxDQUFDQyxNQUFNO29CQUN4QjtvQkFFQUwsT0FBT0QsUUFBUSxDQUFDSSxFQUFFLENBQUMsbUJBQW1CLElBQU07d0JBQzFDSCxPQUFPSSxRQUFRLENBQUNDLE1BQU07b0JBQ3hCO29CQUVBLE1BQU1iLFdBQVcsSUFBSVYsaUVBQTZCLENBQUNpQjtvQkFDbkQsTUFBTU4sU0FBU0QsU0FBU2dCLFNBQVM7b0JBQ2pDLE1BQU1kLFdBQVcsSUFBSVosbURBQWUsQ0FDbENGLHVEQUFlQSxFQUNma0IsYUFDQUw7b0JBR0ZHLFdBQVdEO29CQUNYSixTQUFTO3dCQUFFQzt3QkFBVUM7d0JBQVFDO29CQUFTO2dCQUN4QyxPQUFPO29CQUNMZ0IsTUFBTTtnQkFDUixDQUFDO1lBQ0gsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUVBZDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ1osa0RBQU1BOzs7OzswQkFDUCw4REFBQ0MsZ0RBQUlBOzs7OzswQkFRTCw4REFBQ0MsbURBQU9BO2dCQUFDRyxPQUFPd0I7Ozs7OzswQkFDaEIsOERBQUMxQiwrQ0FBR0E7Z0JBQUNFLE9BQU9BOzs7Ozs7OztBQUdsQixDQUFDO0dBakV1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vY29uZmlnLmpzXCI7XG5pbXBvcnQgYWJpIGZyb20gXCIuL2NvbnRyYWN0cy9CdXlNZUNvZmZlZS5qc29uXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci5qc1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4vSGVyby5qc1wiO1xuaW1wb3J0IENvbm5lY3QgZnJvbSBcIi4vQ29ubmVjdC5qc1wiO1xuaW1wb3J0IEJ1eSBmcm9tIFwiLi9CdXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgcHJvdmlkZXI6IG51bGwsXG4gICAgc2lnbmVyOiBudWxsLFxuICAgIGNvbnRyYWN0OiBudWxsLFxuICB9KTtcblxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIk5vbmVcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29udHJjYXRBQkkgPSBhYmkuYWJpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcImNoYWluQ2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICAgIGNvbnRyY2F0QUJJLFxuICAgICAgICAgICAgc2lnbmVyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgICAgc2V0U3RhdGUoeyBwcm92aWRlciwgc2lnbmVyLCBjb250cmFjdCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XG4gICAgICA8SGVybz48L0hlcm8+XG4gICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPVwibXktMTAgbXgtMTAgc206bXQtMTAgbWQ6ZHJvcC1zaGFkb3ctbGcgdHJhY2tpbmctd2lkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweS00IG1kOnB4LTggbXktMjAgbXgtMjQgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXllbGxvdy0yMDAgIHctMi8zIFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtY2lyY3VsYXIgdGV4dC1sIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBsZWFkaW5nLW5vcm1hbFwiPlxuICAgICAgICAgICAgY29ubmVjdGVkIGFjY291bnQgOi0ge2FjY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgICA8Q29ubmVjdCBzdGF0ZT17Y30+PC9Db25uZWN0PlxuICAgICAgPEJ1eSBzdGF0ZT17c3RhdGV9PjwvQnV5PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzcyIsImFiaSIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiSGVybyIsIkNvbm5lY3QiLCJCdXkiLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImNvbm5lY3RXYWxsZXQiLCJjb250cmNhdEFCSSIsImV0aGVyZXVtIiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsIm9uIiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});