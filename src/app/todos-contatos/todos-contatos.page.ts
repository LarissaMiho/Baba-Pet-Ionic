import { UsuarioService } from './../services/usuario.service';
import { UtilService } from './../services/util.service';
import { PedidoService } from './../services/pedido.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-todos-contatos',
  templateUrl: './todos-contatos.page.html',
  styleUrls: ['./todos-contatos.page.scss'],
})
export class TodosContatosPage implements OnInit {

  constructor(private router: Router, private pedidoService: PedidoService,
    private utilService: UtilService, private usuarioService: UsuarioService) { }

  usuarioLogado: any;
  usuarios: any;
  pedidos: any;

  ngOnInit() {
    this.usuarioLogado = this.utilService.getUsuarioLogado();
    
    this.pedidoService.getAll().subscribe((result:any)=>{
      this.pedidos = result;
    })

    this.usuarioService.getAll().subscribe((result:any)=>{
      this.usuarios = result;
    })
  }

  buscarNomePorKey(key){
    return this.usuarios.filter(u => u.key == key)[0].value.nome;
  }

  buscarContatoPorKey(key){
    return this.usuarios.filter(u => u.key == key)[0].value.contato;
  }

  irParaContato(){
    this.router.navigate(["/contato"])
  }

}
