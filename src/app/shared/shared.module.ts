import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent],
  exports: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent],
  providers:[]
})
export class SharedModule { }
