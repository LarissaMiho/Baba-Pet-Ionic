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
    rateAgressividade(index) {
        if (this.usuario.tipoUsuario == 1) {
            for (let i = 0; i < this.usuario.agressividadesSuportadas.length; i++) {
                this.usuario.agressividadesSuportadas[i] = i <= index ? true : false;
            }
        }
        else {
            for (let i = 0; i < this.usuario.agressividades.length; i++) {
                this.usuario.agressividades[i] = i <= index ? true : false;
            }
        }
    }
    ratePorte(index) {
        if (this.usuario.tipoUsuario == 1) {
            for (let i = 0; i < this.usuario.portesSuportados.length; i++) {
                this.usuario.portesSuportados[i] = i <= index ? true : false;
            }
        }
        else {
            for (let i = 0; i < this.usuario.portes.length; i++) {
                this.usuario.portes[i] = i <= index ? true : false;
            }
        }
    }
    rateAgitacao(index) {
        if (this.usuario.tipoUsuario == 1) {
            for (let i = 0; i < this.usuario.agitacoesSuportadas.length; i++) {
                this.usuario.agitacoesSuportadas[i] = i <= index ? true : false;
            }
        }
        else {
            for (let i = 0; i < this.usuario.agitacoes.length; i++) {
                this.usuario.agitacoes[i] = i <= index ? true : false;
            }
        }
    }
    rateAtencao(index) {
        if (this.usuario.tipoUsuario == 1) {
            for (let i = 0; i < this.usuario.atencoesSuportadas.length; i++) {
                this.usuario.atencoesSuportadas[i] = i <= index ? true : false;
            }
        }
        else {
            for (let i = 0; i < this.usuario.atencoes.length; i++) {
                this.usuario.atencoes[i] = i <= index ? true : false;
            }
        }
    }
    rateExotico(index) {
        if (this.usuario.tipoUsuario == 1) {
            for (let i = 0; i < this.usuario.exoticosSuportados.length; i++) {
                this.usuario.exoticosSuportados[i] = i <= index ? true : false;
            }
        }
        else {
            for (let i = 0; i < this.usuario.exoticos.length; i++) {
                this.usuario.exoticos[i] = i <= index ? true : false;
            }
        }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>editar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cadastro-wrapper\">\r\n\r\n    <div id=\"ser-baba-pet\" *ngIf=\"usuario != undefined && usuario.tipoUsuario == 1\">\r\n      <ion-label class=\"font-color \">Editar Conta:</ion-label>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nome</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Data de Nascimento</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Contato</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.contato\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Tempo Disponível</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.tempoDisponivel\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Descreva o local que os acolherá</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.descricaoLocal\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Descrição dos Preços</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.descricaoPreco\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Endereço</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.endereco\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Agressividade</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.agressividadesSuportadas[i]?'selected-rating':''\"\r\n            (click)=\"rateAgressividade(i)\" *ngFor=\"let agressividade of usuario.agressividadesSuportadas; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Porte</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.portesSuportados[i]?'selected-rating':''\"\r\n            (click)=\"ratePorte(i)\" *ngFor=\"let porte of usuario.portesSuportados; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Agitação</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.agitacoesSuportadas[i]?'selected-rating':''\"\r\n            (click)=\"rateAgitacao(i)\" *ngFor=\"let agitacao of usuario.agitacoesSuportadas; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Atenção</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.atencoesSuportadas[i]?'selected-rating':''\"\r\n            (click)=\"rateAtencao(i)\" *ngFor=\"let atencao of usuario.atencoesSuportadas; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Exotico</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.exoticosSuportados[i]?'selected-rating':''\"\r\n            (click)=\"rateExotico(i)\" *ngFor=\"let exotico of usuario.exoticosSuportados; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"div-wrapper-choose-options\">\r\n        <div class=\"text-center\">\r\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"salvar()\">Salvar\r\n          </ion-label>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div id=\"procurar-baba-pet\" *ngIf=\"usuario != undefined && usuario.tipoUsuario == 2\">\r\n      <ion-label class=\"font-color \">Editar Conta:</ion-label>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nome</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\r\n      </ion-item>\r\n      <ion-label class=\"font-color \">Preencha com as informações de seu Pet</ion-label>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Tipo</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.tipo\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Raça</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.raca\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Data de Nascimento</ion-label>\r\n        <ion-input [(ngModel)]=\"usuario.dataNascimento\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Como ele é?</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.descricao\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Observações</ion-label>\r\n        <ion-textarea [(ngModel)]=\"usuario.observacoes\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Agressividade</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.agressividades[i]?'selected-rating':''\"\r\n            (click)=\"rateAgressividade(i)\" *ngFor=\"let agressividade of usuario.agressividades; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Porte</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.portes[i]?'selected-rating':''\" (click)=\"ratePorte(i)\"\r\n            *ngFor=\"let porte of usuario.portes; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Agitação</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.agitacoes[i]?'selected-rating':''\" (click)=\"rateAgitacao(i)\"\r\n            *ngFor=\"let agitacao of usuario.agitacoes; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Atenção</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.atencoes[i]?'selected-rating':''\" (click)=\"rateAtencao(i)\"\r\n            *ngFor=\"let atencao of usuario.atencoes; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Exotico</ion-label>\r\n        <div class=\"d-flex\">\r\n          <ion-icon name=\"paw-outline\" [ngClass]=\"usuario.exoticos[i]?'selected-rating':''\" (click)=\"rateExotico(i)\"\r\n            *ngFor=\"let exotico of usuario.exoticos; let i=index\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <div class=\"div-wrapper-choose-options\">\r\n        <div class=\"text-center\">\r\n          <ion-label class=\"font-color\" style=\"line-height: 60px;\" (click)=\"salvar()\">Salvar\r\n          </ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

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