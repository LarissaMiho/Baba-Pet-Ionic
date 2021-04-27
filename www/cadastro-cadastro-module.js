(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "2xf1":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "Iv4U");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "AYIN");







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"]
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })
], CadastroPageModule);



/***/ }),

/***/ "AYIN":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.page.html */ "whE1");
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page.scss */ "j0Tv");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util.service */ "2Rin");







let CadastroPage = class CadastroPage {
    constructor(utilService, router, usuarioService) {
        this.utilService = utilService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.toolbarColor = this.utilService.getToolbarColor();
        this.isCadastro = false;
        this.tipoUsuario = 0;
    }
    ngOnInit() {
    }
    serBabaPet() {
        this.usuario = {
            nome: "",
            dataNascimento: "",
            contato: "",
            tempoDisponivel: "",
            descricaoLocal: "",
            descricaoPreco: ""
        };
        this.tipoUsuario = 1;
        this.isCadastro = true;
    }
    procurarBabaPet() {
        this.usuario = {
            nome: "",
            tipo: "",
            raca: "",
            dataNascimento: "",
            descricao: "",
            observacoes: ""
        };
        this.tipoUsuario = 2;
        this.isCadastro = true;
    }
    irParaLista() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usuario.tipoUsuario = this.tipoUsuario;
            let key = yield this.usuarioService.insert(this.usuario);
            this.usuario.key = key;
            this.utilService.setUsuarioLogado(this.usuario);
            this.router.navigate(["/lista"]);
        });
    }
};
CadastroPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CadastroPage);



/***/ }),

/***/ "Iv4U":
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function() { return CadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "AYIN");




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ "j0Tv":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cadastro-wrapper {\n  border-radius: 5px;\n  /*background-color: #ecbd78;*/\n  width: 90%;\n  height: 90%;\n  margin-left: 17px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJjYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FkYXN0cm8td3JhcHBlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNlY2JkNzg7Ki9cclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweFxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "whE1":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"ion-color center\" [style.background-color]=\"toolbarColor\">\r\n    <ion-title> BABÁ PET</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cadastro-wrapper\">\r\n    <div *ngIf=\"!isCadastro\">\r\n      <div class=\"text-center\" style=\"padding-top: 50%;\">\r\n        <ion-label class=\"font-color\">Estou aqui para:</ion-label>\r\n      </div>\r\n      <div class=\"div-wrapper-choose-options\">\r\n        <div class=\"text-center\">\r\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"serBabaPet();\">Ser babá de pets</ion-label>\r\n        </div>\r\n      </div>\r\n      <div class=\"div-wrapper-choose-options\">\r\n        <div class=\"text-center\">\r\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"procurarBabaPet()\">procurar por babá de pets\r\n          </ion-label>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"isCadastro\">\r\n      <div id=\"ser-baba-pet\" *ngIf=\"tipoUsuario == 1\">\r\n        <ion-label class=\"font-color \">Cadastrar sua Conta no Babá Pet como Babá</ion-label>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nome</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Data de Nascimento</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Contato</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.contato\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Tempo Disponível</ion-label>\r\n          <ion-textarea [(ngModel)]=\"usuario.tempoDisponivel\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Descreva o local que os acolherá</ion-label>\r\n          <ion-textarea [(ngModel)]=\"usuario.descricaoLocal\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Descrição dos Preços</ion-label>\r\n          <ion-textarea [(ngModel)]=\"usuario.descricaoPreco\"></ion-textarea>\r\n        </ion-item>\r\n        <div id=\"login\" class=\"d-flex-vincular\">\r\n          <ion-icon (click)=\"irParaLista()\" name=\"logo-facebook\" class=\"wrapper icon fb\"></ion-icon>\r\n          <ion-icon (click)=\"irParaLista()\" name=\"logo-instagram\" class=\"wrapper icon insta\"></ion-icon>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div id=\"procurar-baba-pet\" *ngIf=\"tipoUsuario == 2\">\r\n        <ion-label class=\"font-color \">Cadastrar sua Conta no Babá Pet para encontrar uma Babá</ion-label>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nome</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\r\n        </ion-item>\r\n        <ion-label class=\"font-color \">Preencha com as informações de seu Pet</ion-label>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Tipo</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.tipo\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Raça</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.raca\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Data de Nascimento</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Como ele é?</ion-label>\r\n          <ion-textarea [(ngModel)]=\"usuario.descricao\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Observações</ion-label>\r\n          <ion-textarea [(ngModel)]=\"usuario.observacoes\"></ion-textarea>\r\n        </ion-item>\r\n        <div id=\"login\" class=\"d-flex-vincular\">\r\n          <ion-icon (click)=\"irParaLista()\" name=\"logo-facebook\" class=\"wrapper icon fb\"></ion-icon>\r\n          <ion-icon (click)=\"irParaLista()\" name=\"logo-instagram\" class=\"wrapper icon insta\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module.js.map