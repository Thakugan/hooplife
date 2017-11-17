import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Page } from '../../_models/page';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  pages: Page[] = [
    {
      "name": "profile",
      "url": "user"
    },
    {
      "name": "games",
      "url": "games"
    },
    {
      "name": "chat",
      "url": "chat"
    },
    {
      "name": "add a location",
      "url": "locationSubmit"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
