import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesstreatmentPageRoutingModule } from './processtreatment-routing.module';

import { ProcesstreatmentPage } from './processtreatment.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesstreatmentPageRoutingModule,
    NgCircleProgressModule.forRoot({
    backgroundOpacity: 1,
    backgroundStroke: '#f7f3f3',
    backgroundStrokeWidth: 0,
    backgroundPadding: 0,
    radius: 80,
    space: -17,
    toFixed: 0,
    maxPercent: 100,
    unitsFontSize: '50',
    unitsFontWeight: '700',
    unitsColor: '#00a2dd',
    outerStrokeWidth: 17,
    outerStrokeColor: '#00a2dd',
    outerStrokeGradientStopColor: '#b23838',
    outerStrokeLinecap: 'square',
    innerStrokeColor: '#ced3c5',
    innerStrokeWidth: 17,
    titleColor: '#00a2dd',
    titleFontSize: '50',
    titleFontWeight: '700',
    subtitleFontWeight: '100',
    animationDuration: 300,
    showSubtitle: false
    })
  ],
  declarations: [ProcesstreatmentPage]
})
export class ProcesstreatmentPageModule {}
