import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatealarmPage } from './createalarm.page';

const routes: Routes = [
  {
    path: '',
    component: CreatealarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatealarmPageRoutingModule {}
