import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosContatosPageRoutingModule } from './todos-contatos-routing.module';

import { TodosContatosPage } from './todos-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosContatosPageRoutingModule
  ],
  declarations: [TodosContatosPage]
})
export class TodosContatosPageModule {}
