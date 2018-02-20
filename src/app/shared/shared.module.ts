import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentFetchService } from './services/component-fetch.service';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent, HomeComponent, ErrorPageComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [ComponentFetchService]
})
export class SharedModule { }
