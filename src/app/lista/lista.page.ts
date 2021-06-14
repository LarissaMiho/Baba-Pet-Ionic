import { CepService } from './../services/cep.service';
import { PedidoService } from './../services/pedido.service';
import { UsuarioService } from './../services/usuario.service';
import { NavigationExtras, Router } from '@angular/router';
import { UtilService } from './../services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as L from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  toolbarColor = this.utilService.getToolbarColor();

  usuarioLogado: any;
  usuarios: any;
  pedidos: any;
  loading: any;
  private map;
  lat: number;
  lng: number;
  listaBabas: any = [];

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:     [38, 38],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
LeafIcon2 = L.Icon.extend({
  options: {
      shadowUrl: '',
      iconSize:     [30, 45],
      shadowSize:   [50, 64],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
  }
});
  greenIcon = new this.LeafIcon({iconUrl: '../../assets/marker.png'});
  roxoIcon = new this.LeafIcon2({iconUrl: '../../assets/marker2.png'});
  textoBotao = "Lista";

  constructor(private utilService: UtilService, private router: Router,
    private usuarioService: UsuarioService, private pedidoService: PedidoService,
    private loadingCtrl: LoadingController, private geolocation: Geolocation,
    private cepService: CepService) { }


  mudarVisualizacao(){
    if(this.textoBotao === "Lista"){
      this.textoBotao = "Mapa";
    }else{
      this.textoBotao = "Lista";
    }
  }

  getDistanceFromLatLonInKm(position1, position2) {
    "use strict";
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.lat - position1.lat),
        dLng = deg2rad(position2.lng - position1.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(position1.lat))
            * Math.cos(deg2rad(position1.lat))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let resultado = ((R * c *1000));
        if(resultado>1000){
          return `${(resultado/1000).toFixed()}km`
        }
        return `${resultado.toFixed()}m`
}

  getMyPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

    async getLatLongByAddres(endereco, nome, key){
    let minha = {lat:this.lat,lng:this.lng}
    let baba = null;
    let usuarioBaba
    let latBaba = null;
    let lngBaba = null;

    
    await this.usuarioService.getByKey(key).subscribe((result:any)=>{
      usuarioBaba = result
      latBaba = result.lat;
      lngBaba = result.lng;
    })
    setTimeout(() => {

      baba = {lat:latBaba, lng:lngBaba};

     this.listaBabas.push(
       {nome:`${nome} <br>${this.getDistanceFromLatLonInKm(minha,baba)} <br> |${key}`,
       lat:Number(latBaba),
        lng:Number(lngBaba)})
 
    }, 2000);
    
    
    
    //this.nativeGeocoder.forwardGeocode(endereco, this.options)
  //.then((result: NativeGeocoderResult[]) => this.listaBabas.push({nome:nome, lat:result[0].latitude, lng:result[0].longitude}))
  //.catch((error: any) => console.log(error));
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat,this.lng],
      zoom: 14
    });
    let listaPage = this;

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>'
    });
    var markersLayer = L.featureGroup().addTo(this.map);
    markersLayer.on("click", function (event) {
      var clickedMarker = event.layer;
      listaPage.irParaContato(clickedMarker._popup._content.split("|")[1]);
    });
    L.marker([this.lat,this.lng],{icon:this.roxoIcon}).addTo(markersLayer).bindPopup("Eu");

    for(let u of this.listaBabas){
      L.marker([u.lat,u.lng],{icon:this.greenIcon}).addTo(markersLayer).bindPopup(u.nome);
    }

    tiles.addTo(this.map);
  }
  teste(a){
    alert(a);
  }

  async ngOnInit() {

    this.getMyPosition();
    this.usuarioLogado = this.utilService.getUsuarioLogado();
    if(this.usuarioLogado.tipoUsuario == 2){
       await this.usuarioService.getAll().subscribe((result1:any)=>{
        this.usuarios = result1
        
        for(let u of this.usuarios){
          if(u.value.endereco && u.value.tipoUsuario != 2){
              this.getLatLongByAddres(u.value.endereco, u.value.nome, u.key);
  
          }
        }
        
      })
      setTimeout(() => {
        this.initMap();
      }, 5000);
    }else{
      this.usuarioService.getAll().subscribe((result1:any)=>{
        this.usuarios = result1;
      })

      this.pedidoService.getAll().subscribe((result2:any)=>{
        this.pedidos = result2;
        console.log(result2);
      })
    }
    
    
    

    
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



}
