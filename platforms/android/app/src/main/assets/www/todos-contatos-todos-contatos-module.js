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
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/usuario.service */ "on2l");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/util.service */ "2Rin");
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/pedido.service */ "KG2h");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let TodosContatosPage = class TodosContatosPage {
    constructor(router, pedidoService, utilService, usuarioService) {
        this.router = router;
        this.pedidoService = pedidoService;
        this.utilService = utilService;
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuarioLogado = this.utilService.getUsuarioLogado();
        this.pedidoService.getAll().subscribe((result) => {
            this.pedidos = result;
        });
        this.usuarioService.getAll().subscribe((result) => {
            this.usuarios = result;
        });
    }
    buscarNomePorKey(key) {
        return this.usuarios.filter(u => u.key == key)[0].value.nome;
    }
    buscarContatoPorKey(key) {
        return this.usuarios.filter(u => u.key == key)[0].value.contato;
    }
    irParaContato() {
        this.router.navigate(["/contato"]);
    }
};
TodosContatosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_5__["PedidoService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
TodosContatosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>todosContatos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cadastro-wrapper\">\r\n\r\n    <ng-container *ngFor=\"let pedido of pedidos\">\r\n      <ion-item *ngIf=\"pedido.value.procurador == usuarioLogado.key && usuarios\" (click)=\"irParaContato();\">\r\n        <ion-label>\r\n          <h2>{{buscarNomePorKey(pedido.value.baba)}}</h2>\r\n\r\n          <p *ngIf=\"pedido.value.status == 'pendente' \">Pendente</p>\r\n          <p *ngIf=\"pedido.value.status == 'aceito' \">{{buscarContatoPorKey(pedido.value.baba)}}</p>\r\n          <p *ngIf=\"pedido.value.status == 'rejeitado' \">Rejeitado</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n\r\n    <ion-label position=\"stacked\">Quando a babá aceitar seu pedido, você será notificado e\r\n      aparecerá o contato do cuidador(a) para poder contatá-lo.</ion-label>\r\n\r\n\r\n    <!-- <ion-item (click)=\"irParaContato();\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"./avatar-finn.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Lucas Henrique</h2>\r\n        <p>Contato Rejeitado</p>\r\n      </ion-label>\r\n    </ion-item> -->\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=todos-contatos-todos-contatos-module.js.map