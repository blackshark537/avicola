(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["capacity-capacity-module"],{

/***/ "049o":
/*!*********************************************!*\
  !*** ./src/app/capacity/capacity.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXBhY2l0eS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "D1h5":
/*!*****************************************************!*\
  !*** ./src/app/capacity/capacity-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CapacityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityPageRoutingModule", function() { return CapacityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capacity.page */ "tM7h");




const routes = [
    {
        path: '',
        component: _capacity_page__WEBPACK_IMPORTED_MODULE_3__["CapacityPage"]
    }
];
let CapacityPageRoutingModule = class CapacityPageRoutingModule {
};
CapacityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CapacityPageRoutingModule);



/***/ }),

/***/ "hxyX":
/*!***************************************!*\
  !*** ./src/assets/data/capacity.json ***!
  \***************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"ambiente\":\"normal\",\"published_at\":\"2021-03-21T15:21:45.000Z\",\"created_at\":\"2021-03-20T22:13:23.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"empresa\":{\"id\":1,\"monbre_comercial\":null,\"telefono\":\"8299833824\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"correo\":\"admin@gmail.com\",\"RNC\":\"219082737812\",\"owner_email\":\"avelino@gmail.com\",\"published_at\":\"2021-03-21T15:21:52.000Z\",\"created_at\":\"2021-03-20T21:38:19.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"nombre_comercial\":\"Huevos Endy\",\"perfil_usuario\":1},\"area\":{\"id\":1,\"largo\":\"120\",\"ancho\":\"150\"},\"ubicacion\":{\"id\":1,\"lon\":0,\"lat\":0},\"inventario\":[{\"id\":1,\"equipo\":\"bebedero\",\"tipo\":\"automatico\",\"descripcion\":null,\"fecha_compra\":\"2020-06-08\",\"vida_util\":8,\"capacidad_instalada\":1,\"published_at\":\"2021-03-21T15:27:34.000Z\",\"created_at\":\"2021-03-21T15:24:21.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"cantidad\":10}]}]");

/***/ }),

/***/ "tM7h":
/*!*******************************************!*\
  !*** ./src/app/capacity/capacity.page.ts ***!
  \*******************************************/
/*! exports provided: CapacityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityPage", function() { return CapacityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_capacity_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./capacity.page.html */ "w5+C");
/* harmony import */ var _capacity_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capacity.page.scss */ "049o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_assets_data_capacity_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/data/capacity.json */ "hxyX");
var src_assets_data_capacity_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/capacity.json */ "hxyX", 1);






let CapacityPage = class CapacityPage {
    constructor(platform) {
        this.platform = platform;
        this.cols = [{ prop: 'Enviroment' }, { prop: 'Company' }, { prop: 'Phone' }, { prop: 'Area' }, { prop: 'Address' }];
        this.capacities = [];
    }
    ngOnInit() {
        this.capacities = src_assets_data_capacity_json__WEBPACK_IMPORTED_MODULE_5__.map(c => {
            const { id, ambiente, direccion } = c;
            const { ancho, largo } = c.area;
            const { nombre_comercial, telefono } = c.empresa;
            return {
                id,
                enviroment: ambiente,
                area: (parseInt(ancho) * parseInt(largo)) + 'mt',
                company: nombre_comercial,
                phone: telefono,
                address: direccion
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
CapacityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CapacityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-capacity',
        template: _raw_loader_capacity_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_capacity_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CapacityPage);



/***/ }),

/***/ "w5+C":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capacity/capacity.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar [color]=\"isMaterial? 'primary' : '' \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Capacities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Capacities</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-table name=\"Capacities\" [cols]=\"cols\" [rows]=\"capacities\" (selected)=\"selected($event)\"></app-table>\n</ion-content>\n");

/***/ }),

/***/ "zwPJ":
/*!*********************************************!*\
  !*** ./src/app/capacity/capacity.module.ts ***!
  \*********************************************/
/*! exports provided: CapacityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityPageModule", function() { return CapacityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capacity-routing.module */ "D1h5");
/* harmony import */ var _capacity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capacity.page */ "tM7h");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let CapacityPageModule = class CapacityPageModule {
};
CapacityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _capacity_routing_module__WEBPACK_IMPORTED_MODULE_5__["CapacityPageRoutingModule"]
        ],
        declarations: [_capacity_page__WEBPACK_IMPORTED_MODULE_6__["CapacityPage"]]
    })
], CapacityPageModule);



/***/ })

}]);
//# sourceMappingURL=capacity-capacity-module.js.map