import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoscompletadosPage } from './pedidoscompletados.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoscompletadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoscompletadosPageRoutingModule {}
