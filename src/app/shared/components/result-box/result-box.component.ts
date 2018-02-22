import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit, OnChanges {

  constructor() {}
  show: boolean;
  @Input() data: any;  
  position: any;     

  ngOnInit() {}

  ngOnChanges() {
    this.position = this.data;
    this.show = this.position ? true: false;
  }

}
