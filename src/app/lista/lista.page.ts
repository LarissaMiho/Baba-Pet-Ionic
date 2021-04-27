import { PedidoService } from './../services/pedido.service';
import { UsuarioService } from './../services/usuario.service';
import { NavigationExtras, Router } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  @ViewChild('map') mapElement: any;
  


  usuarioLogado: any;
  usuarios: any;
  pedidos: any;
  loading: any;
  map: GoogleMap;
  
  constructor(private utilService: UtilService, private router: Router,
    private usuarioService: UsuarioService, private pedidoService: PedidoService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {

    //this.mapElement = this.mapElement.nativeElement;
    
    //this.mapElement.style.width = 100+'px';
    //this.mapElement.style.height = 100+'px';

    //this.loadMap();

    this.usuarioLogado = this.utilService.getUsuarioLogado();

    this.usuarioService.getAll().subscribe((result1:any)=>{
      this.usuarios = result1
    })

    this.pedidoService.getAll().subscribe((result2:any)=>{
      this.pedidos = result2;
    })

    console.log("usuarios: ");
    console.log(this.usuarios)
    /*this.usuarioService.getAll().subscribe((data)=>{
      let usuario:any = data[0].value;
      //usuario.nome = "Leonardo";
      //this.usuarioService.update(data[0].value, data[0].key);
      console.log(data)
    }, error=>{

    })*/
  }
  irParaContato(keyUsuarioEscolhido){
  
    //localStorage.setItem("usuarioEscolhido",keyUsuarioEscolhido);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        key: keyUsuarioEscolhido
      }
    };
    this.router.navigate(["/contato"],navigationExtras)
  }

  /*async loadMap(){
    this.loading = await this.loadingCtrl.create({message: "Por favor, aguarde..."})
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBpUcr_upKhaCuPYjB7wnaSJQ9kmaffHkc',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBpUcr_upKhaCuPYjB7wnaSJQ9kmaffHkc'
    });

    this.map = GoogleMaps.create(this.mapElement);
  }*/

}
