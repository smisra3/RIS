import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsBetweenStationsRoutingModule } from './trains-between-stations-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    TrainsBetweenStationsRoutingModule
  ],
  declarations: [MainComponent]
})
export class TrainsBetweenStationsModule { }
