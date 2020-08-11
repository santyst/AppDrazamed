import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticadevolucionPageRoutingModule } from './politicadevolucion-routing.module';

import { PoliticadevolucionPage } from './politicadevolucion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticadevolucionPageRoutingModule
  ],
  declarations: [PoliticadevolucionPage]
})
export class PoliticadevolucionPageModule {}
