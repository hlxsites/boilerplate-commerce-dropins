export const id = 601;
export const ids = [601];
export const modules = {

/***/ 736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-debugger--show-slots [data-slot-key]{
  outline:1px dashed var(--color-neutral-600);
  border-radius:4px;
}

.dropin-debugger--show-slots [data-slot-key]::before{
  content:attr(data-slot-key);
  font:var(--type-details-caption-1-font);
  color:var(--color-informational-800);
  background-color:var(--color-informational-200);
  font-size:0.75rem;
  border-radius:4px 4px 0 0;
  padding:0.2rem 0.4rem;
  font-weight:600;
  position:absolute;
  z-index:2;
}

.dropin-debugger--show-slots [data-slot]{
  outline:2px dashed var(--color-informational-800);
  outline-offset:3px;
  border-radius:4px;
  min-height:2rem;
}

.dropin-debugger--show-slots [data-slot]::before{
  font:var(--type-details-caption-1-font);
  content:attr(data-slot);
  color:var(--color-informational-200);
  background-color:var(--color-informational-800);
  font-size:0.75rem;
  border-radius:4px 4px 0 0;
  padding:0.2rem 0.4rem;
  font-weight:600;
  position:absolute;
  transform:translateY(-26px);
  z-index:2;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(892);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(865);
/* harmony import */ var _storefront_pdp_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_cjs_js_storefront_pdp_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_debugger_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(736);

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

options.styleTagTransform = (_storefront_pdp_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_storefront_pdp_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function insertAtTop(element) {
                  const parent = document.querySelector('head');

                  const lastInsertedElement =
                    window._lastElementInsertedByStyleLoader;

                  if (!lastInsertedElement) {
                    parent.insertBefore(element, parent.firstChild);
                  } else if (lastInsertedElement.nextSibling) {
                    parent.insertBefore(
                      element,
                      lastInsertedElement.nextSibling
                    );
                  } else {
                    parent.appendChild(element);
                  }

                  window._lastElementInsertedByStyleLoader = element;
                };
options.domAPI = (_storefront_pdp_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_storefront_pdp_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _storefront_pdp_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_storefront_pdp_node_modules_css_loader_dist_cjs_js_storefront_pdp_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_debugger_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_storefront_pdp_node_modules_css_loader_dist_cjs_js_storefront_pdp_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_debugger_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z && _storefront_pdp_node_modules_css_loader_dist_cjs_js_storefront_pdp_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_debugger_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.locals ? _storefront_pdp_node_modules_css_loader_dist_cjs_js_storefront_pdp_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_debugger_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.locals : undefined);


/***/ })

};
