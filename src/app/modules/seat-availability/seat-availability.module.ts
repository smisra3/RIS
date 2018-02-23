import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatAvailabilityRoutingModule } from './seat-availability-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SeatAvailabilityRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class SeatAvailabilityModule { }
