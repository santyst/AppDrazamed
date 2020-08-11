import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaretractoPage } from './politicaretracto.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaretractoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaretractoPageRoutingModule {}
