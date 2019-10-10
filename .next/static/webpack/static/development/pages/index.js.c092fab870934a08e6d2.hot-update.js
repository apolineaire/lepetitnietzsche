webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Quote.tsx":
/*!**********************************!*\
  !*** ./src/components/Quote.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blockquote */ "./src/components/Blockquote.tsx");



var _jsxFileName = "/Users/pierre-emmanueldenys/lepetitnietzsche/src/components/Quote.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    p{\n        font-size:2rem;\n        line-height:1.6;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\nmargin-bottom: 6rem;\nblockquote{\n        border-radius:5px;\n        background-color:", ";\n        border-left: 5px solid ", ";\n        font-family:\"Space Mono\", monospace;\n        margin:3rem 0;\n        padding-left: 2rem;\n        h2{\n            font-size:2.2rem;\n            color: ", ";\n            margin: 1rem 0;\n            padding: 1rem 0 0 0;\n        }\n        p{\n            margin: 0 0 2rem 0;\n            padding: 0 0 2rem 0;\n            line-height:1.2;\n            font-size:2rem;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var QuoteContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.colors.blue;
});
var ParagraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());

var Quote = function Quote(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showParagraph = _useState[0],
      toggleParagraph = _useState[1]; // const [blockHeight, storeBlockHeight] = useState(0)


  var _renderAnswer = function _renderAnswer() {
    var copy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.answer);

    var arrayOfPargraph = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(copy);

    return arrayOfPargraph.map(function (paragraph) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, paragraph);
    });
  };

  return __jsx(QuoteContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_Blockquote__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: props.title,
    quote: props.quote,
    toggleParagraph: toggleParagraph,
    showParagraph: showParagraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), props.answer && showParagraph ? __jsx(ParagraphContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, _renderAnswer()) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ })

})
//# sourceMappingURL=index.js.c092fab870934a08e6d2.hot-update.js.map