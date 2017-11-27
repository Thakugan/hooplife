import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

@Component({
  	selector: 'app-location-details',
  	templateUrl: './location-details.component.html',
  	styleUrls: ['./location-details.component.scss']
})

export class LocationDetailsComponent implements OnInit {

	  @Input() location: Location;
    @Input() comments: Comment[];
    displayComments: boolean = true;
    hasRated: boolean;
    hasCommented: boolean;

    newComment: Comment = new Comment();

  	constructor() {}

    addComment() {
      this.newComment.date = new Date();

      this.newComment = new Comment();
      this.hasCommented = true;
    }

    processRating(num: number){
      this.newComment.rating = num;
      this.hasRated = true;
    }

  	ngOnInit() {

  	}
}
