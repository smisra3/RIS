import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  tabs: Array<Object>
  constructor(private _http: Http) {
    this.tabs = [];
  }
  ngOnInit() {
    var _self = this;
    this.fetchData();
  }
  fetchData() {
    return this._http.get('src/mocks/navigation-bar.json')
      .map((res: Response) => this.tabs = res.json().tabs)
      .subscribe(
        (data) => this.tabs,
        (error) => console.error(error)        
      );
  }
  clickHandler(e) {
    console.log(e)
    window.location.href = 'https://enquiry.indianrail.gov.in/ntes/';
  }

}
