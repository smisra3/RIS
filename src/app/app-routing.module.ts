import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';
import { HomeModule } from 'app/modules/home/home.module';
import { ErrorModule } from "app/modules/error/error.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/modules/home.module#HomeModule'
  },
  {
    path: '**',
    loadChildren: 'app/modules/error.module#ErrorModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, HomeModule, ErrorModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }