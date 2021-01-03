import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaPageRoutingModule } from './prueba-routing.module';

import { PruebaPage } from './prueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PruebaPageRoutingModule
  ],
  declarations: [PruebaPage]
})
export class PruebaPageModule {}
