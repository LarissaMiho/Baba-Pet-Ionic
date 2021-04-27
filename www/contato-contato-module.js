(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contato-contato-module"],{

/***/ "Hywg":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YXRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "NNRZ":
/*!*****************************************!*\
  !*** ./src/app/contato/contato.page.ts ***!
  \*****************************************/
/*! exports provided: ContatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPage", function() { return ContatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contato.page.html */ "U48A");
/* harmony import */ var _contato_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato.page.scss */ "Hywg");
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/pedido.service */ "KG2h");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/util.service */ "2Rin");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ContatoPage = class ContatoPage {
    constructor(utilService, router, usuarioService, pedidoService, route) {
        this.utilService = utilService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.pedidoService = pedidoService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params.key) {
                this.data = params.key;
                this.usuarioService.getByKey(this.data).subscribe((result) => {
                    this.usuarioEscolhido = result;
                });
            }
        });
        this.usuarioLogado = this.utilService.getUsuarioLogado();
    }
    criarPedido() {
        this.pedido = {
            baba: "",
            procurador: "",
            status: "pendente",
        };
    }
    ProcurarPedido() {
        this.pedidoService.getAll().subscribe((result) => {
            this.pedidos = result;
        });
        this.pedidos.forEach(element => {
            if (element.baba == this.utilService.getUsuarioLogado().key && element.procurador == this.data) {
                this.pedido = element;
            }
        });
        return this.pedido;
    }
    Aceitar() {
        this.pedido = this.ProcurarPedido();
        this.pedido.status = "aceito";
        this.router.navigate(["/lista"]);
    }
    Recusar() {
        this.router.navigate(["/lista"]);
    }
    Contatar() {
        this.criarPedido();
        this.pedido.baba = this.data;
        this.pedido.procurador = this.utilService.getUsuarioLogado().key;
        this.pedidoService.insert(this.pedido);
        this.router.navigate(["/lista"]);
    }
};
ContatoPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_3__["PedidoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ContatoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-contato',
        template: _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contato_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContatoPage);



/***/ }),

/***/ "U48A":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>contato</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cadastro-wrapper\">\n    <div id=\"procurar-baba-pet\" *ngIf=\"usuarioEscolhido && usuarioLogado.tipoUsuario == 1\">\n      <br>\n      <ion-label class=\"font-color \">Nome: {{usuarioEscolhido.nome}} </ion-label><br><br>\n      <ion-label class=\"font-color \">Tipo: {{usuarioEscolhido.tipo}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Raça: {{usuarioEscolhido.raca}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Data Nascimento: {{usuarioEscolhido.dataNascimento}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Características: {{usuarioEscolhido.descricao}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Observações: {{usuarioEscolhido.observacoes}}</ion-label><br><br>\n\n      <div class=\"div-wrapper-choose-options\">\n        <div class=\"text-center\">\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"Recusar();\">Recusar</ion-label>\n        </div>\n      </div>\n      <div class=\"div-wrapper-choose-options\">\n        <div class=\"text-center\">\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"Aceitar();\">Aceitar</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"procurar-baba-pet\" *ngIf=\"usuarioEscolhido && usuarioLogado.tipoUsuario == 2\">\n      <br>\n      <ion-label class=\"font-color \">Nome: {{usuarioEscolhido.nome}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Preço: {{usuarioEscolhido.descricaoPreco}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Data Nascimento: {{usuarioEscolhido.dataNascimento}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Tempo Disponível: {{usuarioEscolhido.tempoDisponivel}}</ion-label><br><br>\n      <ion-label class=\"font-color \">Local: {{usuarioEscolhido.descricaoLocal}}</ion-label><br><br>\n\n      <div class=\"div-wrapper-choose-options\">\n        <div class=\"text-center\">\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"Contatar();\">Contatar</ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "saEW":
/*!***************************************************!*\
  !*** ./src/app/contato/contato-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContatoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPageRoutingModule", function() { return ContatoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contato.page */ "NNRZ");




const routes = [
    {
        path: '',
        component: _contato_page__WEBPACK_IMPORTED_MODULE_3__["ContatoPage"]
    }
];
let ContatoPageRoutingModule = class ContatoPageRoutingModule {
};
ContatoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContatoPageRoutingModule);



/***/ }),

/***/ "v9yK":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.module.ts ***!
  \*******************************************/
/*! exports provided: ContatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPageModule", function() { return ContatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contato-routing.module */ "saEW");
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato.page */ "NNRZ");







let ContatoPageModule = class ContatoPageModule {
};
ContatoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contato_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContatoPageRoutingModule"]
        ],
        declarations: [_contato_page__WEBPACK_IMPORTED_MODULE_6__["ContatoPage"]]
    })
], ContatoPageModule);



/***/ })

}]);
//# sourceMappingURL=contato-contato-module.js.map