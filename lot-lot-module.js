(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lot-lot-module"],{

/***/ "/D0f":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lot/lot.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar [color]=\"isMaterial? 'primary' : '' \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lots</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Lots</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-table name=\"Lots\" [cols]=\"cols | async\" [rows]=\"lots\" (selected)=\"selected($event)\"></app-table>\n</ion-content>\n");

/***/ }),

/***/ "/IDY":
/*!***********************************!*\
  !*** ./src/app/lot/lot.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Pc2r":
/*!***********************************!*\
  !*** ./src/app/lot/lot.module.ts ***!
  \***********************************/
/*! exports provided: LotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotPageModule", function() { return LotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lot-routing.module */ "oJfs");
/* harmony import */ var _lot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lot.page */ "jUUA");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let LotPageModule = class LotPageModule {
};
LotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _lot_routing_module__WEBPACK_IMPORTED_MODULE_5__["LotPageRoutingModule"]
        ],
        declarations: [_lot_page__WEBPACK_IMPORTED_MODULE_6__["LotPage"]]
    })
], LotPageModule);



/***/ }),

/***/ "jUUA":
/*!*********************************!*\
  !*** ./src/app/lot/lot.page.ts ***!
  \*********************************/
/*! exports provided: LotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotPage", function() { return LotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lot.page.html */ "/D0f");
/* harmony import */ var _lot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lot.page.scss */ "/IDY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_lot_lot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/lot/lot.service */ "FdSI");







let LotPage = class LotPage {
    constructor(platform, router, lotService) {
        this.platform = platform;
        this.router = router;
        this.lotService = lotService;
        this.cols = this.lotService.cols$;
        this.lots = this.lotService.getLots();
    }
    ngOnInit() {
    }
    get isMaterial() {
        return this.platform.is('ios') ? false : true;
    }
    selected(evt) {
        switch (evt.action) {
            case 'new':
                console.log(evt.action);
                break;
            case 'open':
                this.open(evt.row);
                break;
            case 'delete':
                this.delete(evt.row);
                break;
            default:
                break;
        }
    }
    open(row) {
        this.lotService.lot$.next(row);
        this.router.navigate(['/production']);
    }
    delete(row) {
        this.lotService.deleteLot(row);
    }
};
LotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_lot_lot_service__WEBPACK_IMPORTED_MODULE_6__["LotService"] }
];
LotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lot',
        template: _raw_loader_lot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LotPage);



/***/ }),

/***/ "oJfs":
/*!*******************************************!*\
  !*** ./src/app/lot/lot-routing.module.ts ***!
  \*******************************************/
/*! exports provided: LotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotPageRoutingModule", function() { return LotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lot.page */ "jUUA");




const routes = [
    {
        path: '',
        component: _lot_page__WEBPACK_IMPORTED_MODULE_3__["LotPage"]
    }
];
let LotPageRoutingModule = class LotPageRoutingModule {
};
LotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LotPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=lot-lot-module.js.map