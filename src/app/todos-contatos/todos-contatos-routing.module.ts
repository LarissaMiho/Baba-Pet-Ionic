import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosContatosPage } from './todos-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosContatosPageRoutingModule {}
