(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/layout/tables/tables-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"progress\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Color Column -->\r\n        <ng-container matColumnDef=\"color\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\r\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy9EOlxcQUpcXFF1ZXJ5TWFrZXIvc3JjXFxhcHBcXGxheW91dFxcdGFibGVzXFx0YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFlBQVcsRUFDZDs7QUFFRDs7RUFFSSxXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TablesComponent.prototype, "sort", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/layout/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/layout/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());

/** Constants used to fill up our data base. */
var COLORS = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
var NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "./src/app/layout/tables/tables.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
            declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map