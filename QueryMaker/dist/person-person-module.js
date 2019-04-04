(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-person-module"],{

/***/ "./src/app/layout/person/addperson/addperson.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/person/addperson/addperson.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  addperson works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/person/addperson/addperson.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/person/addperson/addperson.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wZXJzb24vYWRkcGVyc29uL2FkZHBlcnNvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/person/addperson/addperson.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/person/addperson/addperson.component.ts ***!
  \****************************************************************/
/*! exports provided: AddpersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpersonComponent", function() { return AddpersonComponent; });
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

var AddpersonComponent = /** @class */ (function () {
    function AddpersonComponent() {
    }
    AddpersonComponent.prototype.ngOnInit = function () {
    };
    AddpersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addperson',
            template: __webpack_require__(/*! ./addperson.component.html */ "./src/app/layout/person/addperson/addperson.component.html"),
            styles: [__webpack_require__(/*! ./addperson.component.scss */ "./src/app/layout/person/addperson/addperson.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddpersonComponent);
    return AddpersonComponent;
}());



/***/ }),

/***/ "./src/app/layout/person/person-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/person/person-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.component */ "./src/app/layout/person/person.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _person_component__WEBPACK_IMPORTED_MODULE_2__["PersonComponent"]
    }];
var PersonRoutingModule = /** @class */ (function () {
    function PersonRoutingModule() {
    }
    PersonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PersonRoutingModule);
    return PersonRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/person/person.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/person/person.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\">\n    Persons\n  </div>\n  <div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex>\n    <div fxFlex>\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" />\n      </mat-form-field>\n    </div>\n    <div fxFlex>\n      <button style=\"float:right\" mat-mini-fab color=\"primary\" (click)=\"openDialog()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"Select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox\n            (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n            [aria-label]=\"checkboxLabel()\"\n          >\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox\n            (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\"\n            [aria-label]=\"checkboxLabel(row)\"\n          >\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"Id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.Id }}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.Name }}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.Email }}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Contact\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.ContactNo }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"Actions\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button color=\"primary\">\n            <mat-icon mat-icon-button (click)=\"openDialog(row)\">edit</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\">\n            <mat-icon mat-icon-button (click)=\"deleteCustomer(row)\">delete</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n  \n    <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  "

/***/ }),

/***/ "./src/app/layout/person/person.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/person/person.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/person/person.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/person/person.component.ts ***!
  \***************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _addperson_addperson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addperson/addperson.component */ "./src/app/layout/person/addperson/addperson.component.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person.service */ "./src/app/layout/person/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonComponent = /** @class */ (function () {
    function PersonComponent(dialog, notificationService, personService) {
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.personService = personService;
        this.displayedColumns = ['Select', 'Id', 'Name', 'Email', 'Phone', 'Qualification', 'Marital Status', 'Relation', 'Actions'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.getAllPerson();
    };
    PersonComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    PersonComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    PersonComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.Id + 1);
    };
    PersonComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        if (row != null && row !== undefined) {
            dialogConfig.data = {
                Id: row.Id,
                Title: 'Edit Person',
                FirstName: row.FirstName,
                MidddleName: row.MiddleName,
                Phone: row.Phone,
                Gender: row.Gender
            };
        }
        else {
            dialogConfig.data = {
                Id: 0,
                Title: 'Add Person',
                FirstName: '',
                MidddleName: '',
                Phone: '',
                Gender: ''
            };
        }
        dialogConfig.width = '500px';
        dialogConfig.height = '500px';
        var dialogRef = this.dialog.open(_addperson_addperson_component__WEBPACK_IMPORTED_MODULE_4__["AddpersonComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getAllPerson();
        });
    };
    PersonComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PersonComponent.prototype.getAllPerson = function () {
        // const result = this.personService.getList(localStorage.getItem('id')).subscribe(
        //   (data: CustomerList) => {
        //     const custs: Customer[] = [];
        //     for (const v in data) {
        //       custs.push(data[v]);
        //     }
        //     this.dataSource = new MatTableDataSource(custs);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
    };
    PersonComponent.prototype.deleteCustomer = function (row) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PersonComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PersonComponent.prototype, "sort", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/layout/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/app/layout/person/person.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/layout/person/person.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/person/person.module.ts ***!
  \************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/layout/person/person-routing.module.ts");
/* harmony import */ var _addperson_addperson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addperson/addperson.component */ "./src/app/layout/person/addperson/addperson.component.ts");
/* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person.component */ "./src/app/layout/person/person.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PersonModule = /** @class */ (function () {
    function PersonModule() {
    }
    PersonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"], _addperson_addperson_component__WEBPACK_IMPORTED_MODULE_5__["AddpersonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _person_routing_module__WEBPACK_IMPORTED_MODULE_4__["PersonRoutingModule"],
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
            entryComponents: [_addperson_addperson_component__WEBPACK_IMPORTED_MODULE_5__["AddpersonComponent"]]
        })
    ], PersonModule);
    return PersonModule;
}());



/***/ }),

/***/ "./src/app/layout/person/person.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/person/person.service.ts ***!
  \*************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_apiurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/apiurl */ "./src/app/shared/apiurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.url = src_app_shared_apiurl__WEBPACK_IMPORTED_MODULE_1__["Apiurl"].apiurl;
    }
    PersonService.prototype.getList = function (id) {
        return this.http.get(this.url + 'GetCustomer?parentId=' + 1, {});
    };
    PersonService.prototype.saveCustomer = function (customer) {
        return this.http.post(this.url + 'AddCustomer', customer);
    };
    PersonService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.url + 'DeleteCustomer/' + id);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ })

}]);
//# sourceMappingURL=person-person-module.js.map