import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentFetchService } from '../../services/component-fetch.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  dataStream: Observable<any>;
  searchText: String;

  constructor(private _componentFetchService: ComponentFetchService) { 
    this.searchText = '';
  }

  ngOnInit() {
    this.dataStream = this._componentFetchService.getData('src/mocks/search-form.json');
    this.dataStream.map(resp => this.fillData(resp.json())).subscribe();
  }

  fillData(response){
    this.searchText = response.searchLabel;
  }
}
