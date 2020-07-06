import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgottenpasswordPage } from './forgottenpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgottenpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgottenpasswordPageRoutingModule {}
