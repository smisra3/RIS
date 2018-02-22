import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/modules/seat-availability/components/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seat-availability',
    pathMatch: 'full'
  },
  {
    path: 'seat-availability',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatAvailabilityRoutingModule { }
