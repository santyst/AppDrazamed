import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticagarantiaPageRoutingModule } from './politicagarantia-routing.module';

import { PoliticagarantiaPage } from './politicagarantia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticagarantiaPageRoutingModule
  ],
  declarations: [PoliticagarantiaPage]
})
export class PoliticagarantiaPageModule {}
