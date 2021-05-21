(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-contatos-todos-contatos-module"],{

/***/ "1Iae":
/*!*********************************************************!*\
  !*** ./src/app/todos-contatos/todos-contatos.module.ts ***!
  \*********************************************************/
/*! exports provided: TodosContatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosContatosPageModule", function() { return TodosContatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _todos_contatos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-contatos-routing.module */ "b1sW");
/* harmony import */ var _todos_contatos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos-contatos.page */ "rmF6");







let TodosContatosPageModule = class TodosContatosPageModule {
};
TodosContatosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _todos_contatos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodosContatosPageRoutingModule"]
        ],
        declarations: [_todos_contatos_page__WEBPACK_IMPORTED_MODULE_6__["TodosContatosPage"]]
    })
], TodosContatosPageModule);



/***/ }),

/***/ "b1sW":
/*!*****************************************************************!*\
  !*** ./src/app/todos-contatos/todos-contatos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TodosContatosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosContatosPageRoutingModule", function() { return TodosContatosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _todos_contatos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-contatos.page */ "rmF6");




const routes = [
    {
        path: '',
        component: _todos_contatos_page__WEBPACK_IMPORTED_MODULE_3__["TodosContatosPage"]
    }
];
let TodosContatosPageRoutingModule = class TodosContatosPageRoutingModule {
};
TodosContatosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TodosContatosPageRoutingModule);



/***/ }),

/***/ "iVhG":
/*!*********************************************************!*\
  !*** ./src/app/todos-contatos/todos-contatos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2Rvcy1jb250YXRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "rmF6":
/*!*******************************************************!*\
  !*** ./src/app/todos-contatos/todos-contatos.page.ts ***!
  \*******************************************************/
/*! exports provided: TodosContatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosContatosPage", function() { return TodosContatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_todos_contatos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./todos-contatos.page.html */ "sqKF");
/* harmony import */ var _todos_contatos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos-contatos.page.scss */ "iVhG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let TodosContatosPage = class TodosContatosPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    irParaContato() {
        this.router.navigate(["/contato"]);
    }
};
TodosContatosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TodosContatosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-todos-contatos',
        template: _raw_loader_todos_contatos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_todos_contatos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TodosContatosPage);



/***/ }),

/***/ "sqKF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos-contatos/todos-contatos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>todosContatos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cadastro-wrapper\">\n\n    <ion-item (click)=\"irParaContato();\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Maria Braga</h2>\n        <p>00 000000-0000</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)=\"irParaContato();\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Lucas Henrique</h2>\n        <p>Contato Rejeitado</p>\n      </ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=todos-contatos-todos-contatos-module.js.map