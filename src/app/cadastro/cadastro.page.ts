import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  toolbarColor = this.utilService.getToolbarColor();
  isCadastro = false;
  tipoUsuario = 0;
  constructor(private utilService: UtilService) { }

  ngOnInit() {
  }

  serBabaPet() {
    this.tipoUsuario = 1;
    this.isCadastro = true;
  }

  procurarBabaPet() {
    this.tipoUsuario = 2;
    this.isCadastro = true;
  }



}
