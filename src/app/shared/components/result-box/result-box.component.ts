import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit, OnChanges {

  constructor() { }
  
  showLiveStatus: boolean;
  position: any;
  showPNRResult: boolean;

  @Input() data: any;

  ngOnInit() { }

  ngOnChanges() {
    if (this.data) {
      switch (this.data.type) {
        case 'live': {
          this.position = this.data.position;
          this.showLiveStatus = this.position ? true : false;
          break;
        }
        case 'pnr-status': {
          this.showPNRResult = true;
          break;
        }
      }
    }
  }
}
