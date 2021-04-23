import { UsuarioService } from './../services/usuario.service';
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
  key= ""; 
  constructor(private utilService: UtilService,  private router: Router, private usuarioService: UsuarioService) { 

  }

  ngOnInit() {
    //this.usuario = this.utilService.getUsuarioLogado();
    this.key = localStorage.getItem("key")
    this.usuarioService.getByKey(this.key).subscribe((result:any)=>{
      this.usuario = result
    })
  }

  salvar(){
    this.usuarioService.update(this.usuario, this.key);
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
  }

}
