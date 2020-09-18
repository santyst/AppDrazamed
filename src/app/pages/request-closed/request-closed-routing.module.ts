import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestClosedPage } from './request-closed.page';

const routes: Routes = [
  {
    path: '',
    component: RequestClosedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestClosedPageRoutingModule {}
