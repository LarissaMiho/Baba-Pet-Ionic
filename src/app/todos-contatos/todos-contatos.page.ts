import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-contatos',
  templateUrl: './todos-contatos.page.html',
  styleUrls: ['./todos-contatos.page.scss'],
})
export class TodosContatosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaContato(){
    this.router.navigate(["/contato"])
  }

}
