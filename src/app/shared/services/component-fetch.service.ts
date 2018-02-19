import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComponentFetchService {
  constructor(private _http: Http) {}
  getData(url) {
    return this._http.get(url);
  }
}
