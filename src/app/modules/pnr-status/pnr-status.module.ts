import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PnrStatusRoutingModule } from './pnr-status-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    PnrStatusRoutingModule
  ],
  declarations: [MainComponent]
})
export class PnrStatusModule { }
