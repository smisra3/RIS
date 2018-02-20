import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ErrorModule } from "./modules//error/error.module";
import { ResultModule } from "./modules/result/result.module";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'result',
        loadChildren: './modules/result/result.module#ResultModule'
      },
      {
        path: 'error',
        loadChildren: './modules/error/error.module#ErrorModule'
      },
      {
        path: '**',
        redirectTo: 'error',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, HomeModule, ResultModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }