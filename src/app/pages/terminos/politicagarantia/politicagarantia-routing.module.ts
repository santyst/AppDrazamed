import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticagarantiaPage } from './politicagarantia.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticagarantiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticagarantiaPageRoutingModule {}
