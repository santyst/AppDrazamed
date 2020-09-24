import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestOpenPageRoutingModule } from './request-open-routing.module';

import { RequestOpenPage } from './request-open.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestOpenPageRoutingModule
  ],
  declarations: [RequestOpenPage]
})
export class RequestOpenPageModule {}
