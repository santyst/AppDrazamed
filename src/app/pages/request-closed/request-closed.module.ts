import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestClosedPageRoutingModule } from './request-closed-routing.module';

import { RequestClosedPage } from './request-closed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestClosedPageRoutingModule
  ],
  declarations: [RequestClosedPage]
})
export class RequestClosedPageModule {}
