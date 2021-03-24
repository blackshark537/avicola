(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-business-module"],{

/***/ "HnZ3":
/*!*********************************************!*\
  !*** ./src/app/business/business.module.ts ***!
  \*********************************************/
/*! exports provided: BusinessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPageModule", function() { return BusinessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-routing.module */ "ohxY");
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business.page */ "UWxy");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let BusinessPageModule = class BusinessPageModule {
};
BusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _business_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessPageRoutingModule"]
        ],
        declarations: [_business_page__WEBPACK_IMPORTED_MODULE_6__["BusinessPage"]]
    })
], BusinessPageModule);



/***/ }),

/***/ "UWxy":
/*!*******************************************!*\
  !*** ./src/app/business/business.page.ts ***!
  \*******************************************/
/*! exports provided: BusinessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPage", function() { return BusinessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_business_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./business.page.html */ "mZkn");
/* harmony import */ var _business_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business.page.scss */ "gNxQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_assets_data_business_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/data/business.json */ "ulO6");
var src_assets_data_business_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/business.json */ "ulO6", 1);






let BusinessPage = class BusinessPage {
    constructor(platform) {
        this.platform = platform;
        this.cols = [{ prop: 'Company' }, { prop: 'RNC' }, { prop: 'Phone' }, { prop: 'Owner' }, { prop: 'Address' }];
        this.businesses = [];
    }
    ngOnInit() {
        this.businesses = src_assets_data_business_json__WEBPACK_IMPORTED_MODULE_5__.map(b => {
            const { id, nombre_comercial, RNC, telefono, direccion } = b;
            const owner = b.perfil_usuario.nombres + ' ' + b.perfil_usuario.apellidos;
            return {
                id,
                company: nombre_comercial,
                rnc: RNC,
                phone: telefono,
                address: direccion,
                owner
            };
        });
    }
    get isMaterial() {
        return this.platform.is('ios') ? false : true;
    }
    selected(evt) {
        console.log(evt.action);
    }
};
BusinessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
BusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-business',
        template: _raw_loader_business_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_business_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BusinessPage);



/***/ }),

/***/ "gNxQ":
/*!*********************************************!*\
  !*** ./src/app/business/business.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mZkn":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business/business.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar [color]=\"isMaterial? 'primary' : '' \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Businesses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Businesses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-table name=\"Businesses\" [cols]=\"cols\" [rows]=\"businesses\" (selected)=\"selected($event)\"></app-table>\n</ion-content>\n");

/***/ }),

/***/ "ohxY":
/*!*****************************************************!*\
  !*** ./src/app/business/business-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BusinessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPageRoutingModule", function() { return BusinessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business.page */ "UWxy");




const routes = [
    {
        path: '',
        component: _business_page__WEBPACK_IMPORTED_MODULE_3__["BusinessPage"]
    }
];
let BusinessPageRoutingModule = class BusinessPageRoutingModule {
};
BusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinessPageRoutingModule);



/***/ }),

/***/ "ulO6":
/*!***************************************!*\
  !*** ./src/assets/data/business.json ***!
  \***************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"monbre_comercial\":null,\"telefono\":\"8299833824\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"correo\":\"admin@gmail.com\",\"RNC\":\"219082737812\",\"owner_email\":\"avelino@gmail.com\",\"published_at\":\"2021-03-21T15:21:52.000Z\",\"created_at\":\"2021-03-20T21:38:19.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"nombre_comercial\":\"Huevos Endy\",\"perfil_usuario\":{\"id\":1,\"nombres\":\"avelino\",\"apellidos\":\"sarante\",\"cedula\":\"03192323432\",\"telefono\":\"8299833824\",\"sexo\":\"masculino\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"published_at\":\"2021-03-21T15:23:05.000Z\",\"created_at\":\"2021-03-20T21:36:30.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"owner_email\":\"avelino@gmail.com\",\"empresa\":1},\"capacidad_instaladas\":[{\"id\":1,\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"ambiente\":\"normal\",\"published_at\":\"2021-03-21T15:21:45.000Z\",\"created_at\":\"2021-03-20T22:13:23.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"empresa\":1,\"area\":{\"id\":1,\"largo\":\"1200\",\"ancho\":\"1500\"},\"ubicacion\":{\"id\":1,\"lon\":0,\"lat\":0}}]}]");

/***/ })

}]);
//# sourceMappingURL=business-business-module.js.map