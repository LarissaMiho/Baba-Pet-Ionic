import { Router } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  usuarioLogado: any;

  constructor(private utilService: UtilService, private router: Router) { }

  ngOnInit() {
    this.usuarioLogado = this.utilService.getUsuarioLogado();
  }

  irParaLista(){
    this.router.navigate(["/lista"])
  }

}
