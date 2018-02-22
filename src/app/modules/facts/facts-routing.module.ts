import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "app/modules/facts/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactsRoutingModule { }
