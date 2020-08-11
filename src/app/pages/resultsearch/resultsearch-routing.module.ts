import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsearchPage } from './resultsearch.page';

const routes: Routes = [
  {
    path: '',
    component: ResultsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsearchPageRoutingModule {}
