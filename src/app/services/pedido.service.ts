import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { DB } from '../enum/db.enum';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private dbService: DbService) { }

  insert(pedido: any) {
    this.dbService.insert(pedido, DB.PEDIDO);
  }

  update(pedido: any, key: string) {
    this.dbService.update(pedido, key, DB.PEDIDO);
  }

  getAll() {
    return this.dbService.getAll(DB.PEDIDO);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.PEDIDO);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.PEDIDO);
  }
}