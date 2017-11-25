import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user'
import { Comment } from '../../_models/comment';

@Component({
  	selector: 'app-user-public',
  	templateUrl: './user-public.component.html',
  	styleUrls: ['./user-public.component.css']
})

export class UserPublicComponent{

	displayComments: boolean = false;
	currentUser: string = "Steph Curry"
	hasCommented: boolean = false;
	hasRated: boolean = false;
	newComment: Comment = new Comment();

	public user: User;

	constructor(){

		this.user = {
			username: "69xB-Ballerx69",
			firstName: "Chris",
			lastName: "Ragsdale",
			rating: 5,
			year: "Junior",
			rank: "Badass",
			gamesPlayed: 385,
			wins: 384,
			losses: 1,
			email: "Cragsdale@smu.edu",
      password: "**",
			comments: [
				{ userName: 'Lebron James', date: new Date(), rating: 5, commentText: 'Way better than me. I love him.', showRating: true },
				{ userName: 'Michael Jordan', date: new Date(), rating: 5, commentText: 'This boi can play', showRating: false },
				{ userName: 'Shaq', date: new Date(), rating: 5, commentText: 'I want to father his children', showRating: true }
			],
			dateCreated: new Date()
		}

	}

	addComment() {
      this.newComment.userName = this.currentUser;
      this.newComment.date = new Date();

      this.user.comments.push(this.newComment);
      this.newComment = new Comment();
      this.hasCommented = true;
    }

    processRating(num: number){
      this.newComment.rating = num;
      this.hasRated = true;
    }
}
