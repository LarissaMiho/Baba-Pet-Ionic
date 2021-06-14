(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["termos-servicos-termos-servicos-module"],{

/***/ "4r4w":
/*!*******************************************************************!*\
  !*** ./src/app/termos-servicos/termos-servicos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermosServicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosServicosPageRoutingModule", function() { return TermosServicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _termos_servicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termos-servicos.page */ "lvJa");




const routes = [
    {
        path: '',
        component: _termos_servicos_page__WEBPACK_IMPORTED_MODULE_3__["TermosServicosPage"]
    }
];
let TermosServicosPageRoutingModule = class TermosServicosPageRoutingModule {
};
TermosServicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermosServicosPageRoutingModule);



/***/ }),

/***/ "6e5u":
/*!***********************************************************!*\
  !*** ./src/app/termos-servicos/termos-servicos.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtb3Mtc2Vydmljb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "jjTJ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termos-servicos/termos-servicos.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>termosServicos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-label position=\"stacked\">O Aplicativo Babá Pet não\r\n    controla nem orienta o que as pessoas e terceiros fazem ou dizem, portanto, não somos responsáveis por\r\n    serviços não pagos ou desviados e nem pelos cuidados de seu animal de estimação do cuidador.\r\n    O aplicativo apenas vende os serviços de hospedagem.\r\n\r\n  </ion-label>\r\n</ion-content>");

/***/ }),

/***/ "lvJa":
/*!*********************************************************!*\
  !*** ./src/app/termos-servicos/termos-servicos.page.ts ***!
  \*********************************************************/
/*! exports provided: TermosServicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosServicosPage", function() { return TermosServicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_termos_servicos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./termos-servicos.page.html */ "jjTJ");
/* harmony import */ var _termos_servicos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termos-servicos.page.scss */ "6e5u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TermosServicosPage = class TermosServicosPage {
    constructor() { }
    ngOnInit() {
    }
};
TermosServicosPage.ctorParameters = () => [];
TermosServicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-termos-servicos',
        template: _raw_loader_termos_servicos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termos_servicos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermosServicosPage);



/***/ }),

/***/ "yJhr":
/*!***********************************************************!*\
  !*** ./src/app/termos-servicos/termos-servicos.module.ts ***!
  \***********************************************************/
/*! exports provided: TermosServicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosServicosPageModule", function() { return TermosServicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _termos_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./termos-servicos-routing.module */ "4r4w");
/* harmony import */ var _termos_servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termos-servicos.page */ "lvJa");







let TermosServicosPageModule = class TermosServicosPageModule {
};
TermosServicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _termos_servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermosServicosPageRoutingModule"]
        ],
        declarations: [_termos_servicos_page__WEBPACK_IMPORTED_MODULE_6__["TermosServicosPage"]]
    })
], TermosServicosPageModule);



/***/ })

}]);
//# sourceMappingURL=termos-servicos-termos-servicos-module.js.map