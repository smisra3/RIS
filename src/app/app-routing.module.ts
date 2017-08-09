import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from "app/shared/navigation-bar/navigation-bar.component";

const routes: Routes = [{
  path: 'nav',
  component: NavigationBarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }