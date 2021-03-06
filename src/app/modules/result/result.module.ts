import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class ResultModule { }
