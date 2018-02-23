import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {
  data: any;
  constructor() { 
  }
  getData() {
    return window.sessionStorage.getItem('type');
  }

  setData(type, data) {
    window.sessionStorage.setItem(type,data);
  }
}
