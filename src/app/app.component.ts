import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './services/util.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tipoUsuario = 2;

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public appPagesBaba = [
    { title: 'Lista de Pedidos', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Editar Perfil', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Sair', url: '/folder/Inbox', icon: 'mail' },
  ];

  public appPagesProcurador = [
    { title: 'Mapa Babá', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Contato das Babás', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Editar Perfil', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Sair', url: '/folder/Inbox', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router, private utilService: UtilService) {
    //this.validarLogado();
  }

  validarLogado() {
    if (!this.utilService.getUsuarioLogado()) {
      this.router.navigate(["/cadastro"])
    }
  }

  serBabaPet() {
    this.tipoUsuario = 1;
  }

  procurarBabaPet() {
    this.tipoUsuario = 2;
  }
}
