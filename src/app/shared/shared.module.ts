import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, SearchFormComponent],
  exports: [NavigationBarComponent, SearchFormComponent]
})
export class SharedModule { }
