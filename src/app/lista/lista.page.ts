import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  usuarioLogado: any;
  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.usuarioLogado = this.utilService.getUsuarioLogado();
  }

}
