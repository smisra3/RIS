import { Component } from '@angular/core';

import { DataSharingService } from "app/core/services/data-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initLoader:Boolean;

  constructor(private _dataSharingService: DataSharingService) {
    this.initLoader = false;
    this._dataSharingService.observeData.subscribe(
      (data) => { this.handleData(data); }
    )
  }

  handleData(data) {
    this.initLoader = data;
  }

}
