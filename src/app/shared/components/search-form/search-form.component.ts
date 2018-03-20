import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ComponentFetchService } from '../../services/component-fetch.service';
import { ShareDataService } from '../../services/share-data.service';
import { DataSharingService } from '../../../core/services/data-sharing.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  dataStream: Observable<any>;
  searchText: string;
  trainNumber: string;
  pnr: string;
  dateOfOrigin: string;
  url: string;
  type: string;
  initLoader: boolean;

  @Output() result = new EventEmitter<any>();

  constructor(
    private _componentFetchService: ComponentFetchService,
    private _http: Http,
    private _router: Router,
    private _shareDataService: ShareDataService,
    private _dataSharingService: DataSharingService) {

    this.searchText = '';
    this.type = '';
    this.initLoader = false;
  }

  ngOnInit() {
    this.dataStream = this._componentFetchService.getData('src/mocks/search-form.json');
    this.type = this._shareDataService.getData();
    this.dataStream.map(resp => this.fillData(resp.json())).subscribe();
  }

  fillData(response) {
    this.searchText = response.searchLabel;
  }

  submitHandler(e) {
    e.preventDefault();
    this.initLoader = true;
    this._dataSharingService.setData(this.initLoader);
    this.constructURL();
  }

  update(e) {
    switch (e.target.id) {
      case 'trainNumber': {
        this.trainNumber = e.target.value;
        break;
      }
      case 'dateOfOrigin': {
        this.dateOfOrigin = e.target.value;
        break;
      }
      case 'pnr': {
        this.pnr = e.target.value;
        break;
      }
    }
  }

  constructURL() {
    switch (this.type) {
      case 'live': {
        // this.url = 'https://api.railwayapi.com/v2/live/train/' + this.trainNumber + '/date/' + this.dateOfOrigin + '/apikey/yuie3cqj0g';
        this.url = 'src/mocks/liveStatus.json';
        break;
      }
      case 'pnr-status': {
        // this.url = 'https://api.railwayapi.com/v2/pnr-status/pnr/' + this.pnr + '/apikey/yuie3cqj0g';
        this.url = 'src/mocks/liveStatus.json';
        break;
      }
    }
    this._http.get(this.url)
      .map(resp => this.successHandler(resp.json()))
      .subscribe();
  }

  successHandler(response) {
    if (response.response_code === 200) {
      this.initLoader = false;
      this._dataSharingService.setData(this.initLoader);
      response.type = this.type;
      this.result.emit(response);
    }
  }
}
