import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataSharingService {

  observeData: Observable<any>;
  private myObservable = new Subject<any>();

  constructor() { 
    this.observeData = this.myObservable.asObservable();
  }

  setData(data) {
    this.myObservable.next(data);  
  }

}
