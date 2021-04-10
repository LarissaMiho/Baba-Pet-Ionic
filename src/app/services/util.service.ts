import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  USUARIO_LOGADO = "usuario_logado";

  constructor() { }

  setUsuarioLogado(usuarioLogado) {
    localStorage.setItem(this.USUARIO_LOGADO, this.objToStr(usuarioLogado));
  }

  getUsuarioLogado() {
    return this.strToObj(localStorage.getItem(this.USUARIO_LOGADO))
  }

  removeUsuarioLogado() {
    localStorage.removeItem(this.USUARIO_LOGADO);
  }

  strToObj(str) {
    return JSON.parse(str);
  }

  objToStr(obj) {
    return JSON.stringify(obj);
  }

  getToolbarColor() {
    return "#e1832c";
  }

  getContentColor() {
    return "#fae5b0";
  }

}
