import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../../_services/location.service';
import { ProfileService } from '../../_services/profile.service';

import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

@Component({
  selector: 'app-location-details-page',
  templateUrl: './location-details-page.component.html',
  styleUrls: ['./location-details-page.component.scss']
})
export class LocationDetailsPageComponent implements OnInit {

  private place: Location;
  private comments: Comment[];
  private displayComments: boolean = false;
  private hasRated: boolean;
  private hasCommented: boolean;

  private newComment: Comment = new Comment();

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private profileService: ProfileService
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
    const loc = +this.route.snapshot.paramMap.get('locID');
    this.profileService.getComments("location", loc).subscribe(
      comments => {
        this.comments = comments;
      },
      err => {
        this.comments = [];
      }
    );
  }

  addComment() {
    this.newComment = new Comment();
    this.hasCommented = true;
  }

  processRating(num: number){
    this.newComment.rating = num;
    this.hasRated = true;
  }
}
