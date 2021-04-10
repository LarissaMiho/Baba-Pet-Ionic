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

  constructor(private utilService: UtilService, private router: Router) { }

  ngOnInit() {
  }

  irParaCadastro() {
    this.router.navigate(["/cadastro"])
  }

}
