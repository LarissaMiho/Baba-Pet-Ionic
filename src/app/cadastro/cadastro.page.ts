import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
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
  usuario: any;
  constructor(private utilService: UtilService,  private router: Router, 
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  serBabaPet() {
    this.usuario = {
      nome:"",
      dataNascimento:"",
      contato:"",
      tempoDisponivel:"",
      descricaoLocal:"",
      descricaoPreco:""

    }
    this.tipoUsuario = 1;
    this.isCadastro = true;
  }

  procurarBabaPet() {
    this.usuario = {
      nome:"",
      tipo:"",
      raca:"",
      dataNascimento:"",
      descricao:"",
      observacoes:""
    }
    this.tipoUsuario = 2;
    this.isCadastro = true;
  }

  irParaLista(){
    this.usuario.tipoUsuario = this.tipoUsuario;
    this.usuarioService.insert(this.usuario);
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
  }



}
