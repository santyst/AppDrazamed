import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Createalarm2PageRoutingModule } from './createalarm2-routing.module';

import { Createalarm2Page } from './createalarm2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Createalarm2PageRoutingModule
  ],
  declarations: [Createalarm2Page]
})
export class Createalarm2PageModule {}
