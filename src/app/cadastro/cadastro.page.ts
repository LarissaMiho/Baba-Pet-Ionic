import { CepService } from './../services/cep.service';
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
    private usuarioService: UsuarioService, private cepService: CepService) { }

  ngOnInit() {
  }

  serBabaPet() {
    this.usuario = {
      nome:"",
      dataNascimento:"",
      contato:"",
      tempoDisponivel:"",
      descricaoLocal:"",
      descricaoPreco:"",
      endereco:"",
      lat:"",
      lng:"",

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

    console.log("antes da funçção")
    this.pegarCordenadas();
    console.log("depois da função: ");
    console.log(this.usuario.lat);
    

    setTimeout(() => {
      let key =  this.usuarioService.insert(this.usuario);
    this.usuario.key = key;
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
    }, 5000);
    
  }

  pegarCordenadas(){
    this.cepService.find(this.usuario.endereco).subscribe((data)=>{
      this.usuario.lat = Number(data.latitude)
      this.usuario.lng = Number(data.longitude)
      console.log("data:");
      console.log(data);
      console.log(this.usuario.lat);
    })
  }



}
