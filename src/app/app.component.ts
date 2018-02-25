import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, Router} from '@angular/router';

import { DataSharingService } from "app/core/services/data-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initLoader:Boolean;

  constructor(private _dataSharingService: DataSharingService,      
              private _router: Router) {
    this.initLoader = false;
    this._dataSharingService.observeData.subscribe(
      (data) => { this.handleData(data); }
    )
    this._router.events.subscribe((event) => {this.handleRouting(event);})
  }

  handleRouting(event) {
    if(event instanceof NavigationStart) {
      this.initLoader = true;
    } else if(event instanceof NavigationEnd){  
      this.initLoader = false;  
    }
  }

  handleData(data) {
    this.initLoader = data;
  }

}
