import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsearchPageRoutingModule } from './resultsearch-routing.module';

import { ResultsearchPage } from './resultsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsearchPageRoutingModule
  ],
  declarations: [ResultsearchPage]
})
export class ResultsearchPageModule {}
