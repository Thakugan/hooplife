import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

@Component({
  	selector: 'app-location-details',
  	templateUrl: './location-details.component.html',
  	styleUrls: ['./location-details.component.scss']
})

export class LocationDetailsComponent implements OnInit {

	  public location: Location;
    public displayComments: boolean;
    public hasRated: boolean;
    public hasCommented: boolean;

    public username: string = "Jack";
    public newComment: Comment = new Comment();

  	constructor() { 
  		this.location = {
  			name: 'Hoopland',
  			photoName: 'bball.jpg',
  			address: '123 B-Ball Street, Hoopcity, Hoop',
  			description: "The world's best basketball court. Your life will be forever changed by this place. Prepare for basketball-induced orgasm.",
  			comments: [
  				{ userName: 'Chris', date: new Date(), rating: 5, commentText: 'So fun!!!', showRating: true },
  				{ userName: 'Jenn', date: new Date(), rating: 5, commentText: 'This place is thebomb.com', showRating: false },
  				{ userName: 'Michelle', date: new Date(), rating: 5, commentText: 'Sick court bruh', showRating: true }
  			],
  			rating: 3.4
  		}

      this.displayComments = false;
  	}

    private addComment() {
      this.newComment.userName = this.username;
      this.newComment.date = new Date();

      this.location.comments.push(this.newComment);
      this.newComment = new Comment();
      this.hasCommented = true;
    }

    private processRating(num: number){
      this.newComment.rating = num;
      this.hasRated = true;
    }

  	ngOnInit() {

  	}

}
