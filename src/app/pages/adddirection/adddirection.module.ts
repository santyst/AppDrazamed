import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddirectionPageRoutingModule } from './adddirection-routing.module';

import { AdddirectionPage } from './adddirection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddirectionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdddirectionPage]
})
export class AdddirectionPageModule {}
