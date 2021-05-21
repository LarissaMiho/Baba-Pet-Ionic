import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { DB } from '../enum/db.enum';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private dbService: DbService) { }

  insert(animal: any) {
    this.dbService.insert(animal, DB.ANIMAL);
  }

  update(animal: any, key: string) {
    this.dbService.update(animal, key, DB.ANIMAL);
  }

  getAll() {
    return this.dbService.getAll(DB.ANIMAL);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.ANIMAL);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.ANIMAL);
  }
}