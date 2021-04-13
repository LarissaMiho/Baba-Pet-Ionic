import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  usuarioLogado: any;
  constructor(private utilService: UtilService, private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioLogado = this.utilService.getUsuarioLogado();
    this.usuarioService.getAll().subscribe((data)=>{
      let usuario:any = data[0].value;
      usuario.nome = "Leonardo";
      this.usuarioService.update(data[0].value, data[0].key);
      console.log(data)
    }, error=>{

    })
  }
  irParaContato(){
    this.router.navigate(["/contato"])
  }

}
