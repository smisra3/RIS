import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerText: String;

  constructor(private _http: Http) { 
    this.footerText = '';
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    return this._http.get('src/mocks/footer.json')
               .map(resp => this.footerText = resp.json().footerText)
               .subscribe();
  }
}
