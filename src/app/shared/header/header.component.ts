import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  heading: Object;

  constructor(private _http: Http) {
    this.heading = '';
  }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    return this._http.get('src/mocks/header.json')
      .map((response) => this.heading = response.json().header)
      .subscribe();
  }

}
