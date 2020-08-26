import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesstreatmentPageRoutingModule } from './processtreatment-routing.module';

import { ProcesstreatmentPage } from './processtreatment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesstreatmentPageRoutingModule
  ],
  declarations: [ProcesstreatmentPage]
})
export class ProcesstreatmentPageModule {}
