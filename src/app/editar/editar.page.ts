import { Router } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  usuario: any;
  constructor(private utilService: UtilService,  private router: Router) { }

  ngOnInit() {
    this.usuario = this.utilService.getUsuarioLogado();
  }

  irParaLista(){
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
  }

}
