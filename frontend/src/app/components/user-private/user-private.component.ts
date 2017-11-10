import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  	selector: 'app-user-private',
  	templateUrl: './user-private.component.html',
  	styleUrls: ['./user-private.component.css']
})

export class UserPrivateComponent {

	private displayComments: boolean = false;
	public user: User;

	private newUsername: string;
	private newEmail: string;

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
			comments: [
				{ userName: 'Lebron James', date: new Date(), rating: 5, commentText: 'Way better than me. I love him.', showRating: true },
				{ userName: 'Michael Jordan', date: new Date(), rating: 5, commentText: 'This boi can play', showRating: false },
				{ userName: 'Shaq', date: new Date(), rating: 5, commentText: 'I want to father his children', showRating: true }
			],
			dateCreated: new Date()
		};

	}

	private updateUser(){
		this.user.username = this.newUsername;
		this.user.email = this.newEmail;
	}

}