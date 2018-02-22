import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatAvailabilityRoutingModule } from './seat-availability-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SeatAvailabilityRoutingModule
  ],
  declarations: [HomeComponent]
})
export class SeatAvailabilityModule { }
