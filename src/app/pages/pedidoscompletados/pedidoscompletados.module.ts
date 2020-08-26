import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoscompletadosPageRoutingModule } from './pedidoscompletados-routing.module';

import { PedidoscompletadosPage } from './pedidoscompletados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoscompletadosPageRoutingModule
  ],
  declarations: [PedidoscompletadosPage]
})
export class PedidoscompletadosPageModule {}
