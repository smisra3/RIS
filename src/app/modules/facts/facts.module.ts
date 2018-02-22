import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FactsRoutingModule
  ],
  declarations: [MainComponent]
})
export class FactsModule { }
