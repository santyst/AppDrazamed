import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Createalarm2Page } from './createalarm2.page';

const routes: Routes = [
  {
    path: '',
    component: Createalarm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class Createalarm2PageRoutingModule {}
