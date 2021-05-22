import { CepService } from './../services/cep.service';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  toolbarColor = this.utilService.getToolbarColor();
  isCadastro = false;
  tipoUsuario = 0;
  usuario: any;
  constructor(private utilService: UtilService,  private router: Router, 
    private usuarioService: UsuarioService, private cepService: CepService,
    private camera: Camera) { }

  ngOnInit() {
    
  }

  buildAgressividade(){
    let agressividades = [false, false, false, false, false];
    return agressividades;
  }
  buildPorte(){
    let portes = [false, false, false, false, false];
    return portes;
  }
  buildAgitacao(){
    let agitacao = [false, false, false, false, false];
    return agitacao;
  }
  buildAtencao(){
    let atencao = [false, false, false, false, false];
    return atencao;
  }
  buildExotico(){
    let exotico = [false, false, false, false, false];
    return exotico;
  }

  serBabaPet() {
    this.usuario = {
      nome:"",
      dataNascimento:"",
      contato:"",
      tempoDisponivel:"",
      descricaoLocal:"",
      descricaoPreco:"",
      endereco:"",
      lat:"",
      lng:"",
      agressividadesSuportadas:this.buildAgressividade(),
      portesSuportados:this.buildPorte(),
      agitacoesSuportadas:this.buildAgitacao(),
      atencoesSuportadas:this.buildAtencao(),
      exoticosSuportados:this.buildExotico(),
    }
    this.tipoUsuario = 1;
    this.isCadastro = true;
  }

  procurarBabaPet() {
    this.usuario = {
      nome:"",
      tipo:"",
      raca:"",
      dataNascimento:"",
      descricao:"",
      observacoes:"",
      agressividades:this.buildAgressividade(),
      portes:this.buildPorte(),
      agitacoes:this.buildAgitacao(),
      atencoes:this.buildAtencao(),
      exoticos:this.buildExotico(),
    }
    this.tipoUsuario = 2;
    this.isCadastro = true;
  }

  rateAgressividade(index:number){
    if(this.tipoUsuario == 1){
      for(let i=0; i<this.usuario.agressividadesSuportadas.length; i++){
        this.usuario.agressividadesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.agressividades.length; i++){
        this.usuario.agressividades[i] = i<=index?true:false;
      }
    }
  }
  ratePorte(index:number){
    if(this.tipoUsuario == 1){
      for(let i=0; i<this.usuario.portesSuportados.length; i++){
        this.usuario.portesSuportados[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.portes.length; i++){
        this.usuario.portes[i] = i<=index?true:false;
      }
    }
  }

  rateAgitacao(index:number){
    if(this.tipoUsuario == 1){
      for(let i=0; i<this.usuario.agitacoesSuportadas.length; i++){
        this.usuario.agitacoesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.agitacoes.length; i++){
        this.usuario.agitacoes[i] = i<=index?true:false;
      }
    }
  }

  rateAtencao(index:number){
    if(this.tipoUsuario == 1){
      for(let i=0; i<this.usuario.atencoesSuportadas.length; i++){
        this.usuario.atencoesSuportadas[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.atencoes.length; i++){
        this.usuario.atencoes[i] = i<=index?true:false;
      }
    }
  }
  rateExotico(index:number){
    if(this.tipoUsuario == 1){
      for(let i=0; i<this.usuario.exoticosSuportados.length; i++){
        this.usuario.exoticosSuportados[i] = i<=index?true:false;
      }
    }else{
      for(let i=0; i<this.usuario.exoticos.length; i++){
        this.usuario.exoticos[i] = i<=index?true:false;
      }
    }
  }

    async irParaLista(){
    this.usuario.tipoUsuario = this.tipoUsuario;

    console.log("antes da funçção")
    console.log("depois da função: ");
    console.log(this.usuario.lat);
    

    
      let key = await this.usuarioService.insert(this.usuario);
    this.usuario.key = key;
    this.utilService.setUsuarioLogado(this.usuario);
    this.router.navigate(["/lista"])
    
    
  }

  async pegarCordenadas(){
    await this.cepService.find(this.usuario.endereco).subscribe((data)=>{
      this.usuario.lat = Number(data.latitude)
      this.usuario.lng = Number(data.longitude)
      this.irParaLista();
      console.log("data:");
      console.log(data);
      console.log(this.usuario.lat);
    })
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    alert(imageData);
    }, (err) => {
     // Handle error
    });
  }



}
