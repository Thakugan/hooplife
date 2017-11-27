import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Page } from '../../_models/page';

import { AuthService } from '../../_services/auth.service';
import { ProfileService } from '../../_services/profile.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  pages: Page[];

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    var currentUser = this.profileService.getCurrentUser();
    this.pages = [
      {
        "name": "profile",
        "url": `user/${currentUser}`
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
  }

  logout() {
    this.authService.logout();
  }

}
