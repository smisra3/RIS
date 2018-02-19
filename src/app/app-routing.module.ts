import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from 'app/shared/components/navigation-bar/navigation-bar.component';
import { SearchFormComponent } from 'app/shared/components/search-form/search-form.component';
import { HomeComponent } from 'app/shared/components/home/home.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavigationBarComponent
  }, {
    path: 'search',
    component: SearchFormComponent
  }, {
    path: 'home',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }