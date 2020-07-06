import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastilleroPage } from './pastillero.page';

const routes: Routes = [
  {
    path: '',
    component: PastilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastilleroPageRoutingModule {}
