(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/layout/customer/addcustomer/addcustomer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/customer/addcustomer/addcustomer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ data.Title }}</h2>\n<mat-dialog-content [formGroup]=\"frmAddCustomer\" class=\"mat-typography\">\n  <div fxLayoutGap=\"20px\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Name\"\n        formControlName=\"Name\"\n        [ngClass]=\"{ 'is-invalid': formFields.Name.errors }\"\n        [(ngModel)]=\"data.Name\"\n      />\n      <mat-error *ngIf=\"!!formFields.Name.errors\">\n        <mat-error *ngIf=\"!!formFields.Name.errors.required\">Name is required</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Community Name\"\n        formControlName=\"CommunityName\"\n        [(ngModel)]=\"data.CommunityName\"\n        [ngClass]=\"{ 'is-invalid': formFields.CommunityName.errors }\"\n      />\n      <mat-error *ngIf=\"!!formFields.CommunityName.errors\">\n        <mat-error *ngIf=\"!!formFields.CommunityName.errors.required\">Community Name is required</mat-error>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div fxLayoutGap=\"20px\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Email\"\n        formControlName=\"Email\"\n        [(ngModel)]=\"data.Email\"\n        [ngClass]=\"{ 'is-invalid': formFields.Email.errors }\"\n      />\n      <mat-error *ngIf=\"!!formFields.Email.errors\">\n        <mat-error *ngIf=\"!!formFields.Email.errors.required\">Email is required</mat-error>\n        <mat-error *ngIf=\"!!formFields.Email.errors.email\">Email must be a valid email address</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"ContactNo\"\n        formControlName=\"ContactNo\"\n        [(ngModel)]=\"data.ContactNo\"\n        [ngClass]=\"{ 'is-invalid': formFields.ContactNo.errors }\"\n      />\n      <mat-error *ngIf=\"!!formFields.ContactNo.errors\">\n        <mat-error *ngIf=\"!!formFields.ContactNo.errors.required\">ContactNo is required</mat-error>\n      </mat-error>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n  <button class=\"mat-raised-button mat-primary\" [mat-dialog-close]=\"true\" [disabled]=\"!frmAddCustomer.valid\" (click)=\"saveCustomer()\">\n    Save\n  </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/layout/customer/addcustomer/addcustomer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/customer/addcustomer/addcustomer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jdXN0b21lci9hZGRjdXN0b21lci9hZGRjdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/customer/addcustomer/addcustomer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/customer/addcustomer/addcustomer.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddcustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerComponent", function() { return AddcustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/layout/customer/customer.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer */ "./src/app/layout/customer/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddcustomerComponent = /** @class */ (function () {
    function AddcustomerComponent(dialogRef, formBuilder, customerService, notificationService, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.notificationService = notificationService;
        this.data = data;
    }
    AddcustomerComponent.prototype.ngOnInit = function () {
        this.frmAddCustomer = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            ContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CommunityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Type: 2,
            ParentId: localStorage.getItem('customerId'),
            Id: this.data.Id
        });
    };
    Object.defineProperty(AddcustomerComponent.prototype, "formFields", {
        get: function () {
            return this.frmAddCustomer.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddcustomerComponent.prototype.saveCustomer = function () {
        var _this = this;
        this.customerService.saveCustomer(this.frmAddCustomer.value).subscribe(function (data) {
            if (data['ErrorCode'] === 200) {
                _this.notificationService.openSnackbar(data['Message']);
                _this.onNoClick();
            }
            else {
                _this.notificationService.openSnackbar(data['Message']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddcustomerComponent.prototype.close = function () {
        this.onNoClick();
    };
    AddcustomerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddcustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcustomer',
            template: __webpack_require__(/*! ./addcustomer.component.html */ "./src/app/layout/customer/addcustomer/addcustomer.component.html"),
            styles: [__webpack_require__(/*! ./addcustomer.component.scss */ "./src/app/layout/customer/addcustomer/addcustomer.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]])
    ], AddcustomerComponent);
    return AddcustomerComponent;
}());



/***/ }),

/***/ "./src/app/layout/customer/customer-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/customer/customer-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/layout/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/customer/customer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/customer/customer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\">\r\n  Customers\r\n</div>\r\n<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex>\r\n  <div fxFlex>\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" />\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxFlex>\r\n    <button style=\"float:right\" mat-mini-fab color=\"primary\" (click)=\"openDialog()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"Select\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-checkbox\r\n          (change)=\"$event ? masterToggle() : null\"\r\n          [checked]=\"selection.hasValue() && isAllSelected()\"\r\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n          [aria-label]=\"checkboxLabel()\"\r\n        >\r\n        </mat-checkbox>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <mat-checkbox\r\n          (click)=\"$event.stopPropagation()\"\r\n          (change)=\"$event ? selection.toggle(row) : null\"\r\n          [checked]=\"selection.isSelected(row)\"\r\n          [aria-label]=\"checkboxLabel(row)\"\r\n        >\r\n        </mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.Id }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.Name }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Email\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.Email }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Contact\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.ContactNo }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button color=\"primary\">\r\n          <mat-icon mat-icon-button (click)=\"openDialog(row)\">edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"warn\">\r\n          <mat-icon mat-icon-button (click)=\"deleteCustomer(row)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/customer/customer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/customer/customer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2N1c3RvbWVyL0Q6XFxBSlxcUXVlcnlNYWtlci9zcmNcXGFwcFxcbGF5b3V0XFxjdXN0b21lclxcY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gL2RlZXAvIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4vLyAgICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gL2RlZXAvIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4vLyAgICAgaGVpZ2h0OicxMDAlJ1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/layout/customer/customer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/customer/customer.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.service */ "./src/app/layout/customer/customer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _addcustomer_addcustomer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer/addcustomer.component */ "./src/app/layout/customer/addcustomer/addcustomer.component.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService, dialog, notificationService) {
        this.customerService = customerService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.displayedColumns = ['Select', 'Id', 'Name', 'Email', 'Contact', 'Actions'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.getAllCustomers();
    };
    CustomerComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    CustomerComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    CustomerComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.Id + 1);
    };
    CustomerComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        if (row != null && row !== undefined) {
            dialogConfig.data = {
                Id: row.Id,
                Title: 'Edit Customer',
                Name: row.Name,
                Email: row.Email,
                ContactNo: row.ContactNo,
                CommunityName: row.CommunityName
            };
        }
        else {
            dialogConfig.data = {
                Id: 0,
                Title: 'Add Customer',
                Name: '',
                Email: '',
                ContactNo: '',
                CommunityName: ''
            };
        }
        dialogConfig.width = '500px';
        var dialogRef = this.dialog.open(_addcustomer_addcustomer_component__WEBPACK_IMPORTED_MODULE_3__["AddcustomerComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getAllCustomers();
        });
    };
    CustomerComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CustomerComponent.prototype.getAllCustomers = function () {
        var _this = this;
        var result = this.customerService.getList(localStorage.getItem('id')).subscribe(function (data) {
            var custs = [];
            for (var v in data) {
                custs.push(data[v]);
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](custs);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    CustomerComponent.prototype.deleteCustomer = function (row) {
        var _this = this;
        this.customerService.deleteCustomer(row.Id).subscribe(function (data) {
            if (data['ErrorCode'] === 200) {
                _this.notificationService.openSnackbar(data['Message']);
                _this.getAllCustomers();
            }
            else {
                _this.notificationService.openSnackbar(data['Message']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CustomerComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CustomerComponent.prototype, "sort", void 0);
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/layout/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/layout/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/layout/customer/customer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/customer/customer.module.ts ***!
  \****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/layout/customer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.component */ "./src/app/layout/customer/customer.component.ts");
/* harmony import */ var _addcustomer_addcustomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcustomer/addcustomer.component */ "./src/app/layout/customer/addcustomer/addcustomer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"], _addcustomer_addcustomer_component__WEBPACK_IMPORTED_MODULE_6__["AddcustomerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            entryComponents: [_addcustomer_addcustomer_component__WEBPACK_IMPORTED_MODULE_6__["AddcustomerComponent"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/layout/customer/customer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/customer/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_apiurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/apiurl */ "./src/app/shared/apiurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = src_app_shared_apiurl__WEBPACK_IMPORTED_MODULE_2__["Apiurl"].apiurl;
    }
    CustomerService.prototype.getList = function (id) {
        return this.http.get(this.url + 'GetCustomer?parentId=' + 1, {});
    };
    CustomerService.prototype.saveCustomer = function (customer) {
        return this.http.post(this.url + 'AddCustomer', customer);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.url + 'DeleteCustomer/' + id);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/layout/customer/customer.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/customer/customer.ts ***!
  \*********************************************/
/*! exports provided: Customer, CustomerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerList", function() { return CustomerList; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var CustomerList = /** @class */ (function () {
    function CustomerList() {
    }
    return CustomerList;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map