import { Component, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './services/util.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tipoUsuario;

  public appPages = [
   // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
   // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
   // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
   // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public appPagesBaba = [
    { title: 'Lista de Pedidos', url: '/lista', icon: 'reader' },
    { title: 'Editar Perfil', url: '/editar', icon: 'person' },
    { title: 'Sair', url: '/login', icon: 'play' },
  ];

  public appPagesProcurador = [
    { title: 'Mapa Babá', url: '/lista', icon: 'map' },
    { title: 'Contato das Babás', url: '/todos-contatos', icon: 'people' },
    { title: 'Editar Perfil', url: '/editar', icon: 'person' },
    { title: 'Sair', url: '/login', icon: 'play' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router, private utilService: UtilService) {
    //this.validarLogado();
  }
  
  ngOnInit() {
    //this.tipoUsuario = this.utilService.getUsuarioLogado();
    let u = this.utilService.getUsuarioLogado();
    if(u){
      this.tipoUsuario = u.tipoUsuario;
    }else{
      this.validarLogado();
    }
  }

  irParaPagina(url){
    if (url.indexOf("login") > -1){
      this.utilService.removeUsuarioLogado();
    }
    this.router.navigate([url]);
  }

  validarLogado() {
    if (!this.utilService.getUsuarioLogado()) {
      this.router.navigate(["/login"])
    }
  }

  serBabaPet() {
    this.tipoUsuario = 1;
  }

  procurarBabaPet() {
    this.tipoUsuario = 2;
  }
}
