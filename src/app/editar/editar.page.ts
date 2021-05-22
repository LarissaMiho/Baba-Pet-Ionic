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
    this.usuario = this.utilService.getUsuarioLogado();

    this.key = this.usuario.key;
    this.usuarioService.getByKey(this.key).subscribe((result:any)=>{
      this.usuario = result
    })
  }

  salvar(){
    this.usuarioService.update(this.usuario, this.key);
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
  }

  rateAgressividade(index:number){
    if(this.usuario.tipoUsuario == 1){
      for(let i=0; i<this.usuario.agressividadesSuportadas.length; i++){
        this.usuario.agressividadesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.agressividades.length; i++){
        this.usuario.agressividades[i] = i<=index?true:false;
      }
    }
  }
  ratePorte(index:number){
    if(this.usuario.tipoUsuario == 1){
      for(let i=0; i<this.usuario.portesSuportados.length; i++){
        this.usuario.portesSuportados[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.portes.length; i++){
        this.usuario.portes[i] = i<=index?true:false;
      }
    }
  }

  rateAgitacao(index:number){
    if(this.usuario.tipoUsuario == 1){
      for(let i=0; i<this.usuario.agitacoesSuportadas.length; i++){
        this.usuario.agitacoesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.agitacoes.length; i++){
        this.usuario.agitacoes[i] = i<=index?true:false;
      }
    }
  }

  rateAtencao(index:number){
    if(this.usuario.tipoUsuario == 1){
      for(let i=0; i<this.usuario.atencoesSuportadas.length; i++){
        this.usuario.atencoesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.atencoes.length; i++){
        this.usuario.atencoes[i] = i<=index?true:false;
      }
    }
  }
  rateExotico(index:number){
    if(this.usuario.tipoUsuario == 1){
      for(let i=0; i<this.usuario.exoticosSuportados.length; i++){
        this.usuario.exoticosSuportados[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.exoticos.length; i++){
        this.usuario.exoticos[i] = i<=index?true:false;
      }
    }
  }

}
