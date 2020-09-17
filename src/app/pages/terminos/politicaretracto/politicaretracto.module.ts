import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaretractoPageRoutingModule } from './politicaretracto-routing.module';

import { PoliticaretractoPage } from './politicaretracto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaretractoPageRoutingModule
  ],
  declarations: [PoliticaretractoPage]
})
export class PoliticaretractoPageModule {}
