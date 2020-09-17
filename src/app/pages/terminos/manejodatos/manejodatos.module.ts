import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejodatosPageRoutingModule } from './manejodatos-routing.module';

import { ManejodatosPage } from './manejodatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejodatosPageRoutingModule
  ],
  declarations: [ManejodatosPage]
})
export class ManejodatosPageModule {}
