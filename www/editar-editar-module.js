(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-editar-module"],{

/***/ "/4DK":
/*!*****************************************!*\
  !*** ./src/app/editar/editar.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "/oq6":
/*!*************************************************!*\
  !*** ./src/app/editar/editar-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageRoutingModule", function() { return EditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar.page */ "L5Sm");




const routes = [
    {
        path: '',
        component: _editar_page__WEBPACK_IMPORTED_MODULE_3__["EditarPage"]
    }
];
let EditarPageRoutingModule = class EditarPageRoutingModule {
};
EditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPageRoutingModule);



/***/ }),

/***/ "L5Sm":
/*!***************************************!*\
  !*** ./src/app/editar/editar.page.ts ***!
  \***************************************/
/*! exports provided: EditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPage", function() { return EditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editar.page.html */ "jKDk");
/* harmony import */ var _editar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar.page.scss */ "/4DK");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/util.service */ "2Rin");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let EditarPage = class EditarPage {
    constructor(utilService, router, usuarioService) {
        this.utilService = utilService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.key = "";
    }
    ngOnInit() {
        this.usuario = this.utilService.getUsuarioLogado();
        this.key = this.usuario.key;
        this.usuarioService.getByKey(this.key).subscribe((result) => {
            this.usuario = result;
        });
    }
    salvar() {
        this.usuarioService.update(this.usuario, this.key);
        this.utilService.setUsuarioLogado(this.usuario);
        this.router.navigate(["/lista"]);
    }
};
EditarPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
EditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-editar',
        template: _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditarPage);



/***/ }),

/***/ "jKDk":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editar/editar.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>editar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cadastro-wrapper\">\n\n    <div id=\"ser-baba-pet\" *ngIf=\"usuario != undefined && usuario.tipoUsuario == 1\">\n      <ion-label class=\"font-color \">Editar Conta:</ion-label>\n      <ion-item>\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Data de Nascimento</ion-label>\n        <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Contato</ion-label>\n        <ion-input [(ngModel)]=\"usuario.contato\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Tempo Disponível</ion-label>\n        <ion-textarea [(ngModel)]=\"usuario.tempoDisponivel\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Descreva o local que os acolherá</ion-label>\n        <ion-textarea [(ngModel)]=\"usuario.descricaoLocal\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Descrição dos Preços</ion-label>\n        <ion-textarea [(ngModel)]=\"usuario.descricaoPreco\"></ion-textarea>\n      </ion-item>\n      <div class=\"div-wrapper-choose-options\">\n        <div class=\"text-center\">\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"salvar()\">Salvar\n          </ion-label>\n        </div>\n      </div>\n\n\n    </div>\n\n    <div id=\"procurar-baba-pet\" *ngIf=\"usuario != undefined && usuario.tipoUsuario == 2\">\n      <ion-label class=\"font-color \">Editar Conta:</ion-label>\n      <ion-item>\n        <ion-label position=\"stacked\">Nome</ion-label>\n        <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\n      </ion-item>\n      <ion-label class=\"font-color \">Preencha com as informações de seu Pet</ion-label>\n      <ion-item>\n        <ion-label position=\"stacked\">Tipo</ion-label>\n        <ion-input [(ngModel)]=\"usuario.tipo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Raça</ion-label>\n        <ion-input [(ngModel)]=\"usuario.raca\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Data de Nascimento</ion-label>\n        <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Como ele é?</ion-label>\n        <ion-textarea [(ngModel)]=\"usuario.descricao\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Observações</ion-label>\n        <ion-textarea [(ngModel)]=\"usuario.observacoes\"></ion-textarea>\n      </ion-item>\n\n      <div class=\"div-wrapper-choose-options\">\n        <div class=\"text-center\">\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"salvar()\">Salvar\n          </ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "w6YI":
/*!*****************************************!*\
  !*** ./src/app/editar/editar.module.ts ***!
  \*****************************************/
/*! exports provided: EditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-routing.module */ "/oq6");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.page */ "L5Sm");







let EditarPageModule = class EditarPageModule {
};
EditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPageRoutingModule"]
        ],
        declarations: [_editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"]]
    })
], EditarPageModule);



/***/ })

}]);
//# sourceMappingURL=editar-editar-module.js.map