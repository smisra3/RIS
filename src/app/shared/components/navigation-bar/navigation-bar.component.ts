import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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

  constructor(private _componentFetchService: ComponentFetchService, private _router: Router) {
    this.tabs = [];
    this.signInText = '';
    this.logInText = '';
  }
  ngOnInit() {
    this.links = this._componentFetchService.getData(Constants.COMPONENTS.navigationBar.url);
    this.links.map(resp => this.fillData(resp.json())).subscribe();
  }

  fillData(response) {
    this.tabs = response.tabs;
    this.signInText = response.signInLabel;
    this.logInText = response.logInLabel;
  }

  clickHandler(e) {
    e.preventDefault();
    switch (e.target.dataset.type) {
      case 'live': {
        this._router.navigate(['/home']);
        break;
      }
      case 'check-seat': {
        this._router.navigate(['/seat-availability']);
        break;
      }
      case 'pnr-status': {
        this._router.navigate(['/pnr-status']);
        break;
      }
      case 'between': {
        this._router.navigate(['/between']);
        break;
      }
      case 'facts': {
        this._router.navigate(['/facts']);
        break;
      }
      default: break;
    }
  }

}
