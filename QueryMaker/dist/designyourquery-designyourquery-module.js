(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["designyourquery-designyourquery-module"],{

/***/ "./src/app/layout/designyourquery/designyourquery-routing.modules.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/designyourquery/designyourquery-routing.modules.ts ***!
  \***************************************************************************/
/*! exports provided: DesignyourquerygRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignyourquerygRoutingModule", function() { return DesignyourquerygRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _designyourquery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designyourquery.component */ "./src/app/layout/designyourquery/designyourquery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _designyourquery_component__WEBPACK_IMPORTED_MODULE_2__["DesignyourqueryComponent"]
    }
];
var DesignyourquerygRoutingModule = /** @class */ (function () {
    function DesignyourquerygRoutingModule() {
    }
    DesignyourquerygRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DesignyourquerygRoutingModule);
    return DesignyourquerygRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/designyourquery/designyourquery.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/designyourquery/designyourquery.module.ts ***!
  \******************************************************************/
/*! exports provided: DesignyourqueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignyourqueryModule", function() { return DesignyourqueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _designyourquery_routing_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designyourquery-routing.modules */ "./src/app/layout/designyourquery/designyourquery-routing.modules.ts");
/* harmony import */ var _designyourquery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designyourquery.component */ "./src/app/layout/designyourquery/designyourquery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DesignyourqueryModule = /** @class */ (function () {
    function DesignyourqueryModule() {
    }
    DesignyourqueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_designyourquery_component__WEBPACK_IMPORTED_MODULE_3__["DesignyourqueryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _designyourquery_routing_modules__WEBPACK_IMPORTED_MODULE_2__["DesignyourquerygRoutingModule"]
            ]
        })
    ], DesignyourqueryModule);
    return DesignyourqueryModule;
}());



/***/ })

}]);
//# sourceMappingURL=designyourquery-designyourquery-module.js.map