import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  toolbarColor = this.utilService.getToolbarColor();
  login:string;
  senha:string;

  constructor(private utilService: UtilService, private router: Router,
    private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  logar() {
    this.usuarioService.getAll().subscribe((data) =>{
      let user :any = data.filter((u:any) => u.value.email && u.value.email === this.login 
        && u.value.senha && u.value.senha === this.senha);
      if (user.length > 0){
        let logado = user[0].value;
        logado.key = user[0].key;
        this.utilService.setUsuarioLogado(logado);
        this.router.navigate(["/lista"])
      }else{
        alert("Credenciais incorretas")
      }
    }, error=>{
      console.log(error)
    })
  }

  irParaCadastro() {
    this.router.navigate(["/cadastro"])
  }

  irParaTermosServicos(){
    this.router.navigate(["/termos-servicos"])
  }

}
