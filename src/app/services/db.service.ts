import { Injectable } from '@angular/core';
import { DB } from '../enum/db.enum';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
}) 
export class DbService {

  constructor(private db: AngularFireDatabase) { }


  insert(obj: any, dbName: DB) {
    this.db.list(dbName.toString()).push(obj)
      .then((result: any) => {
      });
  }

  update(obj: any, key: string, dbName: DB) {
    this.db.list(dbName.toString()).update(key, obj)
      .then((result: any) => {
      }).catch((error: any) => {
        console.error(error);
      });;
  }

  getAll(dbName: DB) {
    return this.db.list(dbName.toString())
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  getByKey(key: string, dbName: DB) {
    return this.db.object(`/${dbName}/${key}`).valueChanges();
  }

  delete(key: string, dbName: DB) {
    this.db.object(`/${dbName}/${key}`).remove();
  }
}