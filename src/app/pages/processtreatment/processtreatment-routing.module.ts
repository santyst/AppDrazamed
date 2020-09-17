import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesstreatmentPage } from './processtreatment.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesstreatmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesstreatmentPageRoutingModule {}
