import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejodatosPage } from './manejodatos.page';

const routes: Routes = [
  {
    path: '',
    component: ManejodatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejodatosPageRoutingModule {}
