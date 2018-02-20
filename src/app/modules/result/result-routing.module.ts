import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultBoxComponent } from "app/shared/components/result-box/result-box.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'result',
    pathMatch: 'full'
  },
  {
    path: 'result',
    component: ResultBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
