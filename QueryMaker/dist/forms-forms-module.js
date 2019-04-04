(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/layout/forms/auto-complete/auto-complete.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/forms/auto-complete/auto-complete.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>Auto Complete</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <form>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\" />\r\n                <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n                        <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n                        <span>{{ state.name }}</span> |\r\n                        <small>Population: {{state.population}}</small>\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n            <br />\r\n            <mat-slide-toggle\r\n                [checked]=\"stateCtrl.disabled\"\r\n                (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\"\r\n            >\r\n                Disable Input?\r\n            </mat-slide-toggle>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/forms/auto-complete/auto-complete.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/forms/auto-complete/auto-complete.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/forms/auto-complete/auto-complete.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/forms/auto-complete/auto-complete.component.ts ***!
  \***********************************************************************/
/*! exports provided: State, AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent() {
        var _this = this;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return (state ? _this.filterStates(state) : _this.states.slice()); }));
    }
    AutoCompleteComponent.prototype.ngOnInit = function () { };
    AutoCompleteComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0; });
    };
    AutoCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-complete',
            template: __webpack_require__(/*! ./auto-complete.component.html */ "./src/app/layout/forms/auto-complete/auto-complete.component.html"),
            styles: [__webpack_require__(/*! ./auto-complete.component.scss */ "./src/app/layout/forms/auto-complete/auto-complete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());



/***/ }),

/***/ "./src/app/layout/forms/checkbox/checkbox.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/forms/checkbox/checkbox.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>Checkbox</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n        <label class=\"example-margin\"><b>Align:</b></label>\r\n        <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n            <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n            <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n    <mat-card-header>\r\n        <mat-card-title>Result</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-checkbox\r\n            class=\"example-margin\"\r\n            [(ngModel)]=\"checked\"\r\n            [(indeterminate)]=\"indeterminate\"\r\n            [labelPosition]=\"labelPosition\"\r\n            [disabled]=\"disabled\">\r\n            I'm a checkbox\r\n        </mat-checkbox>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/forms/checkbox/checkbox.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/forms/checkbox/checkbox.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvcm1zL2NoZWNrYm94L0Q6XFxBSlxcUXVlcnlNYWtlci9zcmNcXGFwcFxcbGF5b3V0XFxmb3Jtc1xcY2hlY2tib3hcXGNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/forms/checkbox/checkbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/forms/checkbox/checkbox.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/layout/forms/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/layout/forms/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/layout/forms/date-picker/date-picker.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/forms/date-picker/date-picker.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>Date Picker</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/forms/date-picker/date-picker.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/forms/date-picker/date-picker.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/forms/date-picker/date-picker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/forms/date-picker/date-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    DatePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/layout/forms/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.scss */ "./src/app/layout/forms/date-picker/date-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/layout/forms/form-field/form-field.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/forms/form-field/form-field.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>Form Field</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Input\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <textarea matInput placeholder=\"Textarea\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Select\">\r\n                <mat-option value=\"option\">Option</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/forms/form-field/form-field.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/forms/form-field/form-field.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/forms/form-field/form-field.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/forms/form-field/form-field.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function() { return FormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent() {
    }
    FormFieldComponent.prototype.ngOnInit = function () {
    };
    FormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-field',
            template: __webpack_require__(/*! ./form-field.component.html */ "./src/app/layout/forms/form-field/form-field.component.html"),
            styles: [__webpack_require__(/*! ./form-field.component.scss */ "./src/app/layout/forms/form-field/form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormFieldComponent);
    return FormFieldComponent;
}());



/***/ }),

/***/ "./src/app/layout/forms/forms-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/forms/forms-routing.module.ts ***!
  \******************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.component */ "./src/app/layout/forms/forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/forms/forms.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/forms/forms.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n    <div fxFlex>\r\n        <app-auto-complete></app-auto-complete>\r\n    </div>\r\n    <div fxFlex>\r\n        <app-date-picker></app-date-picker>\r\n    </div>\r\n</div>\r\n<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"20px\">\r\n    <div fxFlex>\r\n\r\n        <app-checkbox></app-checkbox>\r\n    </div>\r\n    <div fxFlex>\r\n        <app-form-field></app-form-field>\r\n    </div>\r\n</div>\r\n\r\n<div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <div fxFlex>\r\n        <app-slider></app-slider>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/forms/forms.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/forms/forms.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/forms/forms.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/forms/forms.component.ts ***!
  \*************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/layout/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/layout/forms/forms.component.scss")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/layout/forms/forms.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/forms/forms.module.ts ***!
  \**********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-complete/auto-complete.component */ "./src/app/layout/forms/auto-complete/auto-complete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/layout/forms/checkbox/checkbox.component.ts");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "./src/app/layout/forms/date-picker/date-picker.component.ts");
/* harmony import */ var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-field/form-field.component */ "./src/app/layout/forms/form-field/form-field.component.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/layout/forms/forms-routing.module.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms.component */ "./src/app/layout/forms/forms.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/layout/forms/slider/slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_9__["FormsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [
                _forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"],
                _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"],
                _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"],
                _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteComponent"]
            ]
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "./src/app/layout/forms/slider/slider.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/forms/slider/slider.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>Slider</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <section class=\"example-section\">\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n            </mat-form-field>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\r\n                Auto ticks\r\n            </mat-checkbox>\r\n            <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\r\n                <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n            </mat-form-field>\r\n        </section>\r\n\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n        </section>\r\n\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n        </section>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n    <mat-card-content>\r\n        <h2 class=\"example-h2\">Result</h2>\r\n        <mat-slider\r\n            class=\"example-margin\"\r\n            [disabled]=\"disabled\"\r\n            [invert]=\"invert\"\r\n            [max]=\"max\"\r\n            [min]=\"min\"\r\n            [step]=\"step\"\r\n            [thumbLabel]=\"thumbLabel\"\r\n            [tickInterval]=\"tickInterval\"\r\n            [(ngModel)]=\"value\"\r\n            [vertical]=\"vertical\">\r\n        </mat-slider>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/forms/slider/slider.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/forms/slider/slider.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n\n.mat-slider-horizontal {\n  width: 300px; }\n\n.mat-slider-vertical {\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvcm1zL3NsaWRlci9EOlxcQUpcXFF1ZXJ5TWFrZXIvc3JjXFxhcHBcXGxheW91dFxcZm9ybXNcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3Jtcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItdmVydGljYWwge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/forms/slider/slider.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/forms/slider/slider.component.ts ***!
  \*********************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/layout/forms/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/layout/forms/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map