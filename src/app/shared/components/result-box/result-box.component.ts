import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnChanges {

  constructor() { 
    this.show = false;
  }
  position : string;
  show: boolean;
  @Input() data: any;       

  ngOnChanges(changes: SimpleChanges) {
    // this.position = 'Train has reached Destination and late by 5 minutes';
    console.log(changes)

  }

}
