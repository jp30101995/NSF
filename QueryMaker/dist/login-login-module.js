(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"content\">\r\n    <form class=\"login-form\" fxFlex [formGroup]=\"FrmLogin\">\r\n      <div class=\"text-center\">\r\n        <h2 class=\"app-name\">CM Portal</h2>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput placeholder=\"Email\" formControlName=\"Username\" [ngClass]=\"{ 'is-invalid': formFields.Username.errors }\" />\r\n            <mat-error *ngIf=\"!!formFields.Username.errors\">\r\n                <mat-error *ngIf=\"!!formFields.Username.errors.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"!!formFields.Username.errors.email\">Email must be a valid email address</mat-error>\r\n              </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input\r\n              matInput\r\n              type=\"password\"\r\n              placeholder=\"Password\"\r\n              formControlName=\"Password\"\r\n              [ngClass]=\"{ 'is-invalid': formFields.Password.errors }\"\r\n            />\r\n            <mat-error  *ngIf=\"!!formFields.Password.errors\">\r\n                <mat-error  *ngIf=\"!!formFields.Password.errors.required\">Password is required</mat-error >\r\n                <mat-error  *ngIf=\"!!formFields.Password.errors.minlength\">Password must be at least 6 characters</mat-error >\r\n              </mat-error >\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" style=\"margin: 20px 0 30px 0\">\r\n        <div fxFlex>\r\n          <mat-checkbox color=\"primary\">Remember Me</mat-checkbox>\r\n        </div>\r\n        <div fxFlex fxLayoutAlign=\"end\">\r\n          <a href=\"javascript:void(0)\">Forget Password</a>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"onLogin(FrmLogin.value)\">Login</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n  .login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n  .login-page .content .login-form {\n      padding: 40px;\n      background: #fff;\n      width: 500px;\n      box-shadow: 0 0 10px #ddd; }\n  .login-page .content .login-form input:-webkit-autofill {\n        -webkit-box-shadow: 0 0 0 30px white inset; }\n  .login-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n  .login-page:before {\n    content: '';\n    background: #3f51b5;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  .text-center {\n  text-align: center; }\n  .w-100 {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEFKXFxRdWVyeU1ha2VyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osbUJBQWtCLEVBd0NyQjtFQTdDRDtJQU9RLFdBQVU7SUFDVixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QixFQWUxQjtFQXpCTDtNQVlZLGdCQUFlO01BQ2YscUJBQW9CO01BQ3BCLGdCQUFlLEVBQ2xCO0VBZlQ7TUFpQlksY0FBYTtNQUNiLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osMEJBQXlCLEVBSTVCO0VBeEJUO1FBc0JnQiwyQ0FBMEMsRUFDN0M7RUF2QmI7SUE0QlEsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxZQUFXO0lBQ1gsU0FBUSxFQUNYO0VBbkNMO0lBcUNRLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixRQUFPO0lBQ1AsVUFBUztJQUNULFNBQVEsRUFDWDtFQUVMO0VBQ0ksbUJBQWtCLEVBQ3JCO0VBQ0Q7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLmFwcC1uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2RkZDtcclxuICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggd2hpdGUgaW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formbulider, loginService, notificationService) {
        this.router = router;
        this.formbulider = formbulider;
        this.loginService = loginService;
        this.notificationService = notificationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.FrmLogin = this.formbulider.group({
            Username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formFields", {
        get: function () {
            return this.FrmLogin.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var login = this.FrmLogin.value;
        var result = this.loginService.login(login).subscribe(function (data) {
            if (data.Response['ErrorCode'] === 200) {
                localStorage.setItem('authToken', data.Response['Message']);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('customerId', data.User['Id'].toString());
                localStorage.setItem('customerName', data.User['Username']);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.notificationService.openSnackbar(data.Response['Message']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_apiurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/apiurl */ "./src/app/shared/apiurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (login) {
        debugger;
        return this.http.post(_shared_apiurl__WEBPACK_IMPORTED_MODULE_2__["Apiurl"].apiurl + 'Authenticate', login);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map