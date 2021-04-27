import { PedidoService } from './../services/pedido.service';
import { UsuarioService } from './../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  usuarioLogado: any;
  usuarioEscolhido: any;
  pedidos: any;
  pedido: any;
  data: any;

  constructor(private utilService: UtilService, private router: Router, 
    private usuarioService: UsuarioService, private pedidoService: PedidoService,
    private route:ActivatedRoute) {
       }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.key) {
        this.data = params.key;
        this.usuarioService.getByKey(this.data).subscribe((result: any) => {
          this.usuarioEscolhido = result
        })
      }
    });
    this.usuarioLogado = this.utilService.getUsuarioLogado();
  }

  criarPedido(){
    this.pedido = {
      baba: "",
      procurador: "",
      status: "pendente",
    }
  }

  ProcurarPedido(){
    this.pedidoService.getAll().subscribe((result:any)=>{
      this.pedidos = result
    })
    this.pedidos.forEach(element => {
      if(element.baba == this.utilService.getUsuarioLogado().key && element.procurador == this.data){
        this.pedido = element;
      }
    });

    return this.pedido;

    
  }

  Aceitar(){
    this.pedido = this.ProcurarPedido();

    this.pedido.status = "aceito"

    this.router.navigate(["/lista"])
  }

  Recusar(){
    this.router.navigate(["/lista"])
  }

  Contatar(){
    this.criarPedido();
    this.pedido.baba = this.data;
    this.pedido.procurador = this.utilService.getUsuarioLogado().key;
    this.pedidoService.insert(this.pedido)
    this.router.navigate(["/lista"])
  }

}
