import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAlarmPageRoutingModule } from './edit-alarm-routing.module';

import { EditAlarmPage } from './edit-alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditAlarmPageRoutingModule
  ],
  declarations: [EditAlarmPage]
})
export class EditAlarmPageModule {}
