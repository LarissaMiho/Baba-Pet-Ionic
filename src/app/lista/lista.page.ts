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
  loading: any = false;
  private map;
  lat: number;
  lng: number;
  listaBabas: any = [];
  filtro: string = "";

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: '',
      iconSize: [38, 38],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    }
  });
  LeafIcon2 = L.Icon.extend({
    options: {
      shadowUrl: '',
      iconSize: [30, 45],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    }
  });
  greenIcon = new this.LeafIcon({ iconUrl: '../../assets/marker.png' });
  roxoIcon = new this.LeafIcon2({ iconUrl: '../../assets/marker2.png' });
  textoBotao = "Lista";
  minha = null;
  baba = null;
  page: number = -1;
  usuariosFiltrados: any = [];
  multiplicador = 50;
  constructor(private utilService: UtilService, private router: Router,
    private usuarioService: UsuarioService, private pedidoService: PedidoService,
    private loadingCtrl: LoadingController, private geolocation: Geolocation,
    private cepService: CepService) { }


  mudarVisualizacao() {
    if (this.textoBotao === "Lista") {
      this.textoBotao = "Mapa";
      this.configureFilter();
    } else {
      this.textoBotao = "Lista";
      
    }
  }

  carregarMais() {
    this.page += 1;
    if (this.usuariosFiltrados.length === 0) {
      this.usuariosFiltrados = this.usuarios.slice(this.page * this.multiplicador, this.page * this.multiplicador + this.multiplicador)
    } else {
      this.usuariosFiltrados.push.apply(this.usuariosFiltrados, this.usuarios.slice(this.page * this.multiplicador, this.page * this.multiplicador + this.multiplicador))
    }
  }

  buscar() {
    this.loading = true;
    this.usuarioService.getAll().subscribe((result1: any) => {
      let temp = [];
      for (let u of result1) {
        this.baba = { lat: u.value.lat, lng: u.value.lng };
        u.value.distancia = this.getDistanceFromLatLonInKm(this.minha, this.baba)
        temp.push(u)
      }
      if (this.filtro) {
        this.usuarios = temp.filter(user =>( user.value?.tempoDisponivel?.toLowerCase().
        indexOf(this.filtro.toLowerCase()) >= 0 ||
         user.value?.nome.toLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0)
         && user.value?.tipoUsuario == 1)
         this.listaBabas = this.usuarios;
         this.usuariosFiltrados = [];
         this.page = -1;
         
         this.usuarios.sort(this.compare);
      this.carregarMais()
      this.loading = false;
      this.initMap(false);
      } else {
        this.usuarios = result1;
        this.usuarios.sort(this.compare);
      this.carregarMais()
      this.loading = false;
      }
      
    })
  }
  configureFilter() {
    // Get the input box
    let input: any = document.getElementById('filtro');

    // Init a timeout variable to be used below
    let timeout = null;
    let doc = this;
    // Listen for keystroke events
    input.addEventListener('keyup', function (e) {
      // Clear the timeout if it has already been set.
      // This will prevent the previous task from executing
      // if it has been less than <MILLISECONDS>
      clearTimeout(timeout);

      // Make a new timeout set to go off in 1000ms (1 second)
      timeout = setTimeout(function () {
        doc.filtro = input.value;
        doc.buscar();
      }, 1000);
    });
  }

  compare(a, b) {
    if (a.value.distancia < b.value.distancia) {
      return -1;
    }
    if (a.value.distancia > b.value.distancia) {
      return 1;
    }
    return 0;
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
    let resultado = ((R * c * 1000));
    if (resultado > 1000) {
      return `${(resultado / 1000).toFixed()}km`
    }
    return `${resultado.toFixed()}m`
  }

  getMyPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      this.minha = { lat: this.lat, lng: this.lng };

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  async getLatLongByAddres(endereco, nome, key) {
    let minha = { lat: this.lat, lng: this.lng }
    let baba = null;
    let usuarioBaba;
    let latBaba = null;
    let lngBaba = null;


    await this.usuarioService.getByKey(key).subscribe((result: any) => {
      usuarioBaba = result
      latBaba = result.lat;
      lngBaba = result.lng;
    })
    setTimeout(() => {

      baba = { lat: latBaba, lng: lngBaba };

      this.listaBabas.push(
        {
          nome: `${nome} <br>${this.getDistanceFromLatLonInKm(minha, baba)} <br> |${key}`,
          lat: Number(latBaba),
          lng: Number(lngBaba)
        })

    }, 2000);



    //this.nativeGeocoder.forwardGeocode(endereco, this.options)
    //.then((result: NativeGeocoderResult[]) => this.listaBabas.push({nome:nome, lat:result[0].latitude, lng:result[0].longitude}))
    //.catch((error: any) => console.log(error));
  }

  private initMap(inicializar = true): void {
    if(inicializar){
      this.map = L.map('map', {
        center: [this.lat, this.lng],
        zoom: 14
      });
    }
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
    L.marker([this.lat, this.lng], { icon: this.roxoIcon }).addTo(markersLayer).bindPopup("Eu");
    let i = 0;
    console.log(this.listaBabas);
    for (let u of this.listaBabas) {
      if (i > 20) {
        break;
      }
      i++
      L.marker([u.lat ? u.lat: u.value.lat, u.lng ? u.lng : u.value.lng], { icon: this.greenIcon }).addTo(markersLayer).bindPopup(u.nome ? u.nome :(u.value.nome+"|"+u.key));
    }

    tiles.addTo(this.map);
  }
  teste(a) {
    alert(a);
  }

  async ngOnInit() {

    this.getMyPosition();
    this.usuarioLogado = this.utilService.getUsuarioLogado();
    if (this.usuarioLogado.tipoUsuario == 2) {
      this.usuarios = [];
      await this.usuarioService.getAll().subscribe((result1: any) => {
        for (let u of result1) {
          this.baba = { lat: u.value.lat, lng: u.value.lng };
          u.value.distancia = this.getDistanceFromLatLonInKm(this.minha, this.baba)
          this.usuarios.push(u);
        }
        this.usuarios.sort(this.compare);

        for (let u of this.usuarios) {
          if (u.value.endereco && u.value.tipoUsuario != 2) {
            this.getLatLongByAddres(u.value.endereco, u.value.nome, u.key);
          }
        }
        this.carregarMais()

      })
      setTimeout(() => {
        this.initMap();
      }, 5000);
    } else {
      this.usuarioService.getAll().subscribe((result1: any) => {

        for (let u of result1) {
          this.baba = { lat: u.value.lat, lng: u.value.lng };
          u.value.distancia = this.getDistanceFromLatLonInKm(this.minha, this.baba)
          this.usuarios.push(u);
        }
        this.usuarios.sort(this.compare);
        this.carregarMais()
      })

      this.pedidoService.getAll().subscribe((result2: any) => {
        this.pedidos = result2;
        console.log(result2);
      })
    }





  }



  irParaContato(keyUsuarioEscolhido) {

    //localStorage.setItem("usuarioEscolhido",keyUsuarioEscolhido);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        key: keyUsuarioEscolhido
      }
    };
    this.router.navigate(["/contato"], navigationExtras)
  }



}