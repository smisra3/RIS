import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ComponentFetchService } from '../../services/component-fetch.service';
import { Constants } from '../../../../constants/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerText: String;
  footer: Observable<any>;

  constructor(private _componentFetchService: ComponentFetchService) {
    this.footerText = '';
  }

  ngOnInit() {
    this.footer = this._componentFetchService.getData(Constants.COMPONENTS.footer.url);
    this.footer.map(resp => this.footerText = resp.json().footerText).subscribe();
  }
}
