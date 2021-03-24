(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "+j7l":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar [color]=\"isMaterial? 'primary' : '' \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Users</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-table name=\"Users\" [cols]=\"cols\" [rows]=\"users\" (selected)=\"selected($event)\"></app-table>\n\n</ion-content>");

/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "7Wfj");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "7Wfj":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.page.html */ "+j7l");
/* harmony import */ var _user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page.scss */ "F5S9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_assets_data_user_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/data/user.json */ "ajYJ");
var src_assets_data_user_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/user.json */ "ajYJ", 1);






let UserPage = class UserPage {
    constructor(platform) {
        this.platform = platform;
        this.cols = [{ prop: 'Firstname' }, { prop: 'Lastname' }, { prop: 'Phone' }, { prop: 'Company' }, { prop: 'Address' }];
        this.users = [];
    }
    ngOnInit() {
        this.users = src_assets_data_user_json__WEBPACK_IMPORTED_MODULE_5__.filter(x => x['empresa'] != null).map(val => {
            const { id, nombres, apellidos, telefono } = val;
            const { nombre_comercial, direccion } = val.empresa;
            return {
                id,
                firstname: nombres,
                lastname: apellidos,
                phone: telefono,
                company: nombre_comercial,
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
UserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserPage);



/***/ }),

/***/ "F5S9":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "7Wfj");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "ajYJ":
/*!***********************************!*\
  !*** ./src/assets/data/user.json ***!
  \***********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"nombres\":\"avelino\",\"apellidos\":\"sarante\",\"cedula\":\"03192323432\",\"telefono\":\"8299833824\",\"sexo\":\"masculino\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"published_at\":\"2021-03-21T15:23:05.000Z\",\"created_at\":\"2021-03-20T21:36:30.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"owner_email\":\"avelino@gmail.com\",\"empresa\":{\"id\":1,\"monbre_comercial\":null,\"telefono\":\"8299833824\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"correo\":\"admin@gmail.com\",\"RNC\":\"219082737812\",\"owner_email\":\"avelino@gmail.com\",\"published_at\":\"2021-03-21T15:21:52.000Z\",\"created_at\":\"2021-03-20T21:38:19.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"nombre_comercial\":\"Huevos Endy\",\"perfil_usuario\":1}},{\"id\":2,\"nombres\":\"manuel\",\"apellidos\":\"rodriguez\",\"cedula\":\"03192322813\",\"telefono\":\"8299833412\",\"sexo\":\"masculino\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"published_at\":\"2021-03-21T15:23:05.000Z\",\"created_at\":\"2021-03-20T21:36:30.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"owner_email\":\"avelino@gmail.com\",\"empresa\":{\"id\":1,\"monbre_comercial\":null,\"telefono\":\"8299833824\",\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"correo\":\"admin@gmail.com\",\"RNC\":\"219082737812\",\"owner_email\":\"avelino@gmail.com\",\"published_at\":\"2021-03-21T15:21:52.000Z\",\"created_at\":\"2021-03-20T21:38:19.000Z\",\"updated_at\":\"2021-03-23T00:57:06.000Z\",\"nombre_comercial\":\"Huevos Endy\",\"perfil_usuario\":1}}]");

/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map