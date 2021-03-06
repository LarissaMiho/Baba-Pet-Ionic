import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { DB } from '../enum/db.enum';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private dbService: DbService) { }

  async insert(usuario: any) {
    let result = await this.dbService.insert(usuario, DB.USUARIO);
    return result;
  }

  update(usuario: any, key: string) {
    this.dbService.update(usuario, key, DB.USUARIO);
  }

  getAll() {
    return this.dbService.getAll(DB.USUARIO);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.USUARIO);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.USUARIO);
  }
}