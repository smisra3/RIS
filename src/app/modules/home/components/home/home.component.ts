import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: string;
  res: any;
  constructor() { }
  ngOnInit() {
    this.data = '';
  }

  ajaxSuccess(e) {
    this.data = e;
  }

}
