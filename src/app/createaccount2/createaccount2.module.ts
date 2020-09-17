import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Createaccount2PageRoutingModule } from './createaccount2-routing.module';
import { Createaccount2Page } from './createaccount2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Createaccount2PageRoutingModule
  ],
  declarations: [Createaccount2Page]
})
export class Createaccount2PageModule {}
