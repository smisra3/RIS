import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ComponentFetchService } from '../../services/component-fetch.service';
import { Constants } from '../../../../constants/config';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  tabs: Array<Object>
  links: Observable<any>;
  siteName: String;
  signInText: String;
  logInText: String;

  constructor(private _componentFetchService: ComponentFetchService) {
    this.tabs = [];
    this.signInText = '';
    this.logInText = '';
  }
  ngOnInit() {
    this.links = this._componentFetchService.getData(Constants.COMPONENTS.navigationBar.url);
    this.links.map(resp => this.fillData(resp.json())).subscribe();
  }

  fillData(response){
    this.tabs = response.tabs;
    this.signInText = response.signInLabel;
    this.logInText = response.logInLabel;
  }

  clickHandler(e) {
    // window.location.href = Constants.LINKS.liveStatus;
  }

}
