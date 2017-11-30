import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../_models/user';
import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

import { MatSnackBar } from '@angular/material';

@Component({
  	selector: 'app-user-private',
  	templateUrl: './user-private.component.html',
  	styleUrls: ['./user-private.component.css']
})

export class UserPrivateComponent {

	displayComments: boolean = false;
	@Input() user: User;
	@Input() locations: Location[];
  	@Input() comments: Comment[];


	newUsername: string;
	newEmail: string;
	newPassword: string;
	passwordVerify: string;

	snackBarMessage: string = "";

	usernameChanged: boolean;
	emailChanged: boolean;
	passwordsMatch: boolean;

	constructor( private snackBar: MatSnackBar ){ }

	private updateUser(){

		if(this.newUsername){
			//attempt to change username. If unsuccessful, display alert
			this.user.username = this.newUsername;
			this.snackBarMessage = this.snackBarMessage + 'Username update successful\n';
		}

		if(this.newEmail){
			this.user.email = this.newEmail;
			this.snackBarMessage = this.snackBarMessage + 'Email update successful\n';
		}

		if(this.newPassword && this.passwordVerify){
			if(this.newPassword === this.passwordVerify){
				//set new password
				this.snackBarMessage = this.snackBarMessage + 'Password update successful\n';
			}

			else{
				this.snackBarMessage = this.snackBarMessage + 'Password update unsuccessful\n';
			}
		}

		this.snackBar.open(this.snackBarMessage, '', {
        	duration: 5000
      	});

      	this.snackBarMessage = "";

		this.resetForm();
	}

	private resetForm(){
		this.newUsername = null;
		this.newEmail = null;
		this.newPassword = null;
		this.passwordVerify = null;
	}

}
