import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(public httpClient: HttpClient) { }

  buildHeadersAuthorization() {
    var headers_object = new HttpHeaders().set("Authorization", environment.TOKEN);
    return headers_object;
  }
  find(endereco: string): any {
    return this.httpClient.get(
      `${environment.API_CEP}?endereco=${endereco}`
    );
  }
}
