import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatealarmPageRoutingModule } from './createalarm-routing.module';

import { CreatealarmPage } from './createalarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatealarmPageRoutingModule
  ],
  declarations: [CreatealarmPage]
})
export class CreatealarmPageModule {}
