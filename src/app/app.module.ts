import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { DataSharingService } from "app/core/services/data-sharing.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
