import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MipastilleroPageRoutingModule } from './mipastillero-routing.module';

import { MipastilleroPage } from './mipastillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MipastilleroPageRoutingModule
  ],
  declarations: [MipastilleroPage]
})
export class MipastilleroPageModule {}
