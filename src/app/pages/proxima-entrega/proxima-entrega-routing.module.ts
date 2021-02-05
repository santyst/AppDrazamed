import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximaEntregaPage } from './proxima-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: ProximaEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximaEntregaPageRoutingModule {}
