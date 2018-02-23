import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { ShareDataService } from '../../../shared/services/share-data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  type:any;

  constructor(private _sharedDataService: ShareDataService) {
    this.type = '';
   }

  ngOnInit() {
    this.type = this._sharedDataService.getData();
  }
}
