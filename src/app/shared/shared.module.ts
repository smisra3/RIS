import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentFetchService } from './services/component-fetch.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent],
  exports: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent],
  providers: [ComponentFetchService]
})
export class SharedModule { }
