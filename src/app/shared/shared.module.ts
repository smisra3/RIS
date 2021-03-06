import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentFetchService } from './services/component-fetch.service';
import { ShareDataService } from './services/share-data.service'; 
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationBarComponent, SearchFormComponent, HeaderComponent, FooterComponent, ErrorPageComponent, ResultBoxComponent],
  exports: [HeaderComponent, FooterComponent, NavigationBarComponent, SearchFormComponent, ResultBoxComponent],
  providers: [ComponentFetchService, ShareDataService]
})
export class SharedModule { }
