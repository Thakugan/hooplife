import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../../_services/location.service';

import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

@Component({
  selector: 'app-location-details-page',
  templateUrl: './location-details-page.component.html',
  styleUrls: ['./location-details-page.component.scss']
})
export class LocationDetailsPageComponent implements OnInit {

  place: Location;
  comments: Comment[];
  displayComments: boolean = true;
  hasRated: boolean;
  hasCommented: boolean;

  newComment: Comment = new Comment();

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
        this.place = location[0];
      },
      err => {
        alert("something went wrong");
      }
    );
  }

  getComments() {
    this.comments = [];
  }

  addComment() {
    this.newComment.date = new Date();

    this.newComment = new Comment();
    this.hasCommented = true;
  }

  processRating(num: number){
    this.newComment.rating = num;
    this.hasRated = true;
  }
}
