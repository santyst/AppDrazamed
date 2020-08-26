import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MipastilleroPage } from './mipastillero.page';

const routes: Routes = [
  {
    path: '',
    component: MipastilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MipastilleroPageRoutingModule {}
