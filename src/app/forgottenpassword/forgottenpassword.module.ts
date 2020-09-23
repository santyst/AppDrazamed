import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgottenpasswordPageRoutingModule } from './forgottenpassword-routing.module';

import { ForgottenpasswordPage } from './forgottenpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForgottenpasswordPageRoutingModule
  ],
  declarations: [ForgottenpasswordPage]
})
export class ForgottenpasswordPageModule {}
