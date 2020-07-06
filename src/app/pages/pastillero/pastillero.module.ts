import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastilleroPageRoutingModule } from './pastillero-routing.module';

import { PastilleroPage } from './pastillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastilleroPageRoutingModule
  ],
  declarations: [PastilleroPage]
})
export class PastilleroPageModule {}
