import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../../_services/location.service';

import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

import { LocationDetailsComponent } from '../../components/location-details/location-details.component'

@Component({
  selector: 'app-location-details-page',
  templateUrl: './location-details-page.component.html',
  styleUrls: ['./location-details-page.component.scss']
})
export class LocationDetailsPageComponent implements OnInit {

  location: Location;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getLocation();
    this.getComments();
  }

  getLocation() {
    const loc = +this.route.snapshot.paramMap.get('locID');
    this.locationService.getLocation(loc).subscribe(
      location => {
        this.location = location;
      },
      err => {
        this.location = new Location();
      }
    );
  }

  getComments() {
    this.comments = [];
  }
}
