(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "9imi":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "FCDQ":
/*!****************************************!*\
  !*** ./src/assets/data/inventory.json ***!
  \****************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"equipo\":\"bebedero\",\"tipo\":\"automatico\",\"descripcion\":null,\"fecha_compra\":\"2020-06-08\",\"vida_util\":8,\"capacidad_instalada\":{\"id\":1,\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"ambiente\":\"normal\",\"published_at\":\"2021-03-21T15:21:45.000Z\",\"created_at\":\"2021-03-20T22:13:23.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"empresa\":1,\"area\":{\"id\":1,\"largo\":\"1200\",\"ancho\":\"1500\"},\"ubicacion\":{\"id\":1,\"lon\":0,\"lat\":0}},\"published_at\":\"2021-03-21T15:27:34.000Z\",\"created_at\":\"2021-03-21T15:24:21.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"cantidad\":10}]");

/***/ }),

/***/ "I142":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar [color]=\"isMaterial? 'primary' : '' \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Inventory</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-table name=\"Inventory\" [cols]=\"cols\" [rows]=\"inventory\" (selected)=\"selected($event)\"></app-table>\n</ion-content>\n");

/***/ }),

/***/ "T4Df":
/*!*********************************************!*\
  !*** ./src/app/inventory/inventory.page.ts ***!
  \*********************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventory.page.html */ "I142");
/* harmony import */ var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.page.scss */ "9imi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_assets_data_inventory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/data/inventory.json */ "FCDQ");
var src_assets_data_inventory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/inventory.json */ "FCDQ", 1);






let InventoryPage = class InventoryPage {
    constructor(platform) {
        this.platform = platform;
        this.cols = [{ prop: 'Item' }, { prop: 'Type' }, { prop: 'Quantity' }, { prop: 'Adquired' }, { prop: 'TimeExpected' }];
        this.inventory = [];
    }
    ngOnInit() {
        this.inventory = src_assets_data_inventory_json__WEBPACK_IMPORTED_MODULE_5__.map(I => {
            const { id, equipo, tipo, cantidad, fecha_compra, vida_util } = I;
            const { direccion } = I.capacidad_instalada;
            return {
                id,
                item: equipo,
                quantity: cantidad + ' und',
                type: tipo,
                adquired: new Date(fecha_compra).toLocaleDateString(),
                timeExpected: vida_util + ' years',
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
InventoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventoryPage);



/***/ }),

/***/ "UYnB":
/*!*******************************************************!*\
  !*** ./src/app/inventory/inventory-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InventoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function() { return InventoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.page */ "T4Df");




const routes = [
    {
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
    }
];
let InventoryPageRoutingModule = class InventoryPageRoutingModule {
};
InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventoryPageRoutingModule);



/***/ }),

/***/ "cLqD":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/*! exports provided: InventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-routing.module */ "UYnB");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory.page */ "T4Df");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let InventoryPageModule = class InventoryPageModule {
};
InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryPageRoutingModule"]
        ],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_6__["InventoryPage"]]
    })
], InventoryPageModule);



/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module.js.map