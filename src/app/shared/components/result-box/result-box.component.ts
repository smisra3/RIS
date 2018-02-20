import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit {

  constructor() { }
  position : string;
  ngOnInit() {
    this.position = 'Train has reached Destination and late by 5 minutes';
  }

}
