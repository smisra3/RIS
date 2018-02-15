import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from 'app/shared/navigation-bar/navigation-bar.component';
import { SearchFormComponent } from 'app/shared/search-form/search-form.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavigationBarComponent
  }, {
    path: 'search',
    component: SearchFormComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }