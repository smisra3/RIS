import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsBetweenStationsRoutingModule } from './trains-between-stations-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    TrainsBetweenStationsRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class TrainsBetweenStationsModule { }
