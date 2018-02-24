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
  dateOfOrigin: string;
  url: string;
  type: string;
  initLoader: boolean;

  @Output() result = new EventEmitter<any>();

  constructor(private _componentFetchService: ComponentFetchService,
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
    this.insertParams();
  }

  update(e) {
    e.target.id === 'trainNumber' ? this.trainNumber = e.target.value : this.dateOfOrigin = e.target.value;
  }

  insertParams() {
    if (!this.trainNumber || !this.dateOfOrigin)
      return false;
    // this.url = 'https://api.railwayapi.com/v2/live/train/' + this.trainNumber + '/date/' + this.dateOfOrigin + '/apikey/yuie3cqj0g';
    this.url = 'src/mocks/liveStatus.json';
    this._http.get(this.url)
      .map(resp => this.successHandler(resp.json()))
      .subscribe();
  }

  successHandler(response) {
    if (response.response_code === 200) {
      // this._router.navigate(['/result']);
      this.initLoader = false;
      this._dataSharingService.setData(this.initLoader);
      this.result.emit(response.position);
    }
  }
}
