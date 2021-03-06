import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ErrorPageComponent } from "app/shared/components/error-page/error-page.component";

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class ErrorModule { }
