import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../shared/components/home/home.component';
import { SearchFormComponent } from '../../shared/components/search-form/search-form.component';
import { NavigationBarComponent } from 'app/shared/components/navigation-bar/navigation-bar.component';
import { ErrorPageComponent } from "app/shared/components/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'error',
        redirectTo: 'error',
        pathMatch : 'full'
      },
      {
        path: 'error',
        component : ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
