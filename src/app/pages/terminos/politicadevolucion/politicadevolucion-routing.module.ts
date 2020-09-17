import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticadevolucionPage } from './politicadevolucion.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticadevolucionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticadevolucionPageRoutingModule {}
