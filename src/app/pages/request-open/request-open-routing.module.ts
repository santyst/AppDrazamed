import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestOpenPage } from './request-open.page';

const routes: Routes = [
  {
    path: '',
    component: RequestOpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestOpenPageRoutingModule {}
