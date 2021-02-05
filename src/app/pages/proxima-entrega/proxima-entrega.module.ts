import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximaEntregaPageRoutingModule } from './proxima-entrega-routing.module';

import { ProximaEntregaPage } from './proxima-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximaEntregaPageRoutingModule
  ],
  declarations: [ProximaEntregaPage]
})
export class ProximaEntregaPageModule {}
