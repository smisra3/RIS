import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PnrStatusRoutingModule } from './pnr-status-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    PnrStatusRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class PnrStatusModule { }
