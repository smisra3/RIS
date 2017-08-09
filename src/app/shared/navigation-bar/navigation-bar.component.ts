import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  tabs = [{
    href: "www.google.co.in",
    text: "Google",
    title: "google"
  }, {
    href: "www.rediffmail.com",
    text: "Rediffmail",
    title: "rediffmail"
  }]
  constructor() { }

  ngOnInit() {
  }

}
