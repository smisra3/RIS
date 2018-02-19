import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ComponentFetchService } from '../../services/component-fetch.service';
import { Constants } from '../../../../constants/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headingText: String;
  header: Observable<any>;

  constructor(private _componentFetchService: ComponentFetchService) {
    this.headingText = '';
  }

  ngOnInit() {
    this.header = this._componentFetchService.getData(Constants.COMPONENTS.header.url);
    this.header.map(resp => this.headingText = resp.json().header).subscribe();
  }
}
