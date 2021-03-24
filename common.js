(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2HoV":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/table/table.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list >\n  <ion-list-header>\n    <ion-label>List {{name? 'of '+ name: ''}}</ion-label>    \n    <ion-button size=\"large\" (click)=\"newRow()\">\n      New\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-list-header>\n\n  <ion-toolbar>\n    <ion-searchbar (ionChange)=\"updateFilter($event)\" debounce=\"500\" animated ></ion-searchbar>\n    <ion-item lines=\"none\">\n      <ion-label>Theme:</ion-label>\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" (ionChange)=\"tableStyle = $event.target.value\" placeholder=\"theme\" [value]=\"tableStyle\">\n        <ion-select-option value=\"material\">Material</ion-select-option>\n        <ion-select-option value=\"bootstrap\">Bootstrap</ion-select-option>\n        <ion-select-option value=\"dark\">Dark</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-toolbar>\n  <ngx-datatable\n    class=\"{{tableStyle}} \"\n    [rows]=\"rows\"\n    \n    [headerHeight]=\"50\"\n    [rowHeight]=\"50\"\n    [footerHeight]=\"50\"\n\n    [limit]=\"9\"\n    [scrollbarH]=\"true\"\n    [columnMode]=\"force\"\n    [selectionType]=\"single\"\n  >\n  <ngx-datatable-column\n  [flexGrow]=\"1\" [maxWidth]=\"30\"\n  name=\"id\" sortable=\"true\">\n  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n    <span>{{row['id']}}</span>\n  </ng-template>\n</ngx-datatable-column>\n\n<ngx-datatable-column\n  *ngFor=\"let col of columns\" name=\"{{col.prop}}\"\n  [flexGrow]=\"1\" minWidth=\"{{col.prop!==expand?120 : 300}}\">\n</ngx-datatable-column>\n\n  <ngx-datatable-column\n  [flexGrow]=\"1\" [minWidth]=\"120\"\n   name=\"Actions\" sortable=\"false\" >\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <ion-button  (click)=\"openRow(row)\" size=\"small\" color=\"tertiary\">\n        <ion-icon name=\"open\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteRow(row)\" size=\"small\" color=\"danger\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ng-template>\n  </ngx-datatable-column>\n\n</ngx-datatable>\n\n</ion-list>");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "88Q5":
/*!*************************************************!*\
  !*** ./src/app/shared/table/table.component.ts ***!
  \*************************************************/
/*! exports provided: TableComponent, SelectedActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedActions", function() { return SelectedActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table.component.html */ "2HoV");
/* harmony import */ var _table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.component.scss */ "LNym");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");





let TableComponent = class TableComponent {
    constructor() {
        this.expand = '';
        this.rows = [];
        this.columns = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.temp = [];
        this.tableStyle = 'material';
        this.customPopoverOptions = {
            header: 'Themes',
            subHeader: 'Select your theme color',
        };
    }
    ngOnInit() {
        this.temp = [...this.rows];
    }
    openRow(row) {
        this.selected.emit({
            action: SelectedActions.open,
            row
        });
    }
    deleteRow(row) {
        this.selected.emit({
            action: SelectedActions.delete,
            row
        });
    }
    newRow() {
        this.selected.emit({
            action: SelectedActions.new,
            row: {}
        });
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(x => x[this.columns[0].prop.toLowerCase()].toLowerCase().includes(val.toLowerCase()) ||
            x[this.columns[1].prop.toLowerCase()].toLowerCase().includes(val.toLowerCase()) ||
            x[this.columns[2].prop.toLowerCase()].includes(val.toLowerCase()));
        this.rows = temp;
        this.table.offset = 0;
    }
};
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"],] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['name',] }],
    expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['expand',] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['rows',] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cols',] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['selected',] }]
};
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-table',
        template: _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TableComponent);

var SelectedActions;
(function (SelectedActions) {
    SelectedActions["open"] = "open";
    SelectedActions["delete"] = "delete";
    SelectedActions["new"] = "new";
})(SelectedActions || (SelectedActions = {}));


/***/ }),

/***/ "FdSI":
/*!*********************************************!*\
  !*** ./src/app/services/lot/lot.service.ts ***!
  \*********************************************/
/*! exports provided: LotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotService", function() { return LotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_assets_data_lot_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/data/lot.json */ "he2P");
var src_assets_data_lot_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/lot.json */ "he2P", 1);
/* harmony import */ var _helpers_browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/browser.service */ "Rx8A");





let LotService = class LotService {
    constructor(helperService) {
        this.helperService = helperService;
        this.lot$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        //lots$ = new BehaviorSubject<LotInterface[]>(null);
        this.cols$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([{ prop: 'Lot' },
            { prop: 'Enviroment' },
            { prop: 'Race' },
            { prop: 'Days' },
            { prop: 'Week' },
            /* { prop: 'Females' },
            { prop: 'Males' },  */
            { prop: 'Total' }]);
    }
    getLots() {
        return src_assets_data_lot_json__WEBPACK_IMPORTED_MODULE_3__.map(l => {
            const { id, lote, codigo_aduanero, raza, fecha_entrada } = l;
            const { hembras, machos } = l.cantidad;
            const { ambiente } = l.capacidad_instalada;
            return {
                id,
                lot: lote,
                code: codigo_aduanero,
                race: raza,
                enviroment: ambiente,
                //entry: fecha_entrada,
                week: Math.floor((new Date().getDate() - parseInt(fecha_entrada.split('-')[2])) / 8) + 1,
                days: new Date().getDate() - parseInt(fecha_entrada.split('-')[2]),
                females: hembras,
                males: machos,
                total: (parseInt(hembras) + parseInt(machos)) + ' Chicks'
            };
        });
    }
    deleteLot(lot) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resp = yield this.helperService.Confirm('Confirm to delete this', 'Delete');
            if (resp) {
                console.log('delete', lot.id);
            }
        });
    }
};
LotService.ctorParameters = () => [
    { type: _helpers_browser_service__WEBPACK_IMPORTED_MODULE_4__["BrowserService"] }
];
LotService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LotService);



/***/ }),

/***/ "LNym":
/*!***************************************************!*\
  !*** ./src/app/shared/table/table.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "88Q5");







let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]
        ],
        exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "Rx8A":
/*!*****************************************************!*\
  !*** ./src/app/services/helpers/browser.service.ts ***!
  \*****************************************************/
/*! exports provided: BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return BrowserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let BrowserService = class BrowserService {
    constructor(toastCtrl, alertCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Confirm(question, header) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let accept = false;
            const confirm = yield this.alertCtrl.create({
                animated: true,
                header: header ? header : 'Alert',
                message: question,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => accept = false
                    },
                    {
                        text: 'Okay',
                        handler: () => accept = true
                    }
                ]
            });
            yield confirm.present();
            yield confirm.onDidDismiss();
            return accept;
        });
    }
    showToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                animated: true,
                duration: 2000,
                message: msg,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
};
BrowserService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
BrowserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BrowserService);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "he2P":
/*!**********************************!*\
  !*** ./src/assets/data/lot.json ***!
  \**********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"codigo_empresa\":\"1\",\"codigo_aduanero\":\"122\",\"fecha_entrada\":\"2021-03-16\",\"cantidad\":{\"id\":1,\"hembras\":\"500\",\"machos\":\"500\"},\"lote\":\"121\",\"published_at\":\"2021-03-21T15:18:11.000Z\",\"created_at\":\"2021-03-20T21:40:20.000Z\",\"updated_at\":\"2021-03-23T20:40:05.000Z\",\"raza\":\"hy-line w-80\",\"owner_email\":\"avelino@gmail.com\",\"capacidad_instalada\":{\"id\":1,\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"ambiente\":\"normal\",\"published_at\":\"2021-03-21T15:21:45.000Z\",\"created_at\":\"2021-03-20T22:13:23.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"empresa\":1,\"area\":{\"id\":1,\"largo\":\"1200\",\"ancho\":\"1500\"},\"ubicacion\":{\"id\":1,\"lon\":0,\"lat\":0}}},{\"id\":2,\"codigo_empresa\":\"2\",\"codigo_aduanero\":\"125\",\"fecha_entrada\":\"2021-03-17\",\"cantidad\":{\"id\":2,\"hembras\":\"720\",\"machos\":\"940\"},\"lote\":\"123\",\"published_at\":\"2021-03-21T15:18:11.000Z\",\"created_at\":\"2021-03-20T21:40:20.000Z\",\"updated_at\":\"2021-03-21T15:18:11.000Z\",\"raza\":\"hy-line w-80\",\"owner_email\":\"avelino@gmail.com\",\"capacidad_instalada\":{\"id\":1,\"direccion\":\"ceiba de madera san victor moca, espaillat\",\"ambiente\":\"controlado\",\"published_at\":\"2021-03-21T15:21:45.000Z\",\"created_at\":\"2021-03-20T22:13:23.000Z\",\"updated_at\":\"2021-03-21T15:31:31.000Z\",\"empresa\":1,\"area\":{\"id\":1,\"largo\":\"1200\",\"ancho\":\"1500\"},\"ubicacion\":{\"id\":1,\"lon\":0,\"lat\":0}}}]");

/***/ }),

/***/ "pX2f":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map