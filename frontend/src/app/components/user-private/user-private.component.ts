import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../_models/user';
import { Location } from '../../_models/location';
import { Comment } from '../../_models/comment';

@Component({
  	selector: 'app-user-private',
  	templateUrl: './user-private.component.html',
  	styleUrls: ['./user-private.component.css']
})

export class UserPrivateComponent {

	private displayComments: boolean = false;


	@Input() private user: User;
  	@Input() private locations: Location[];
  	@Input() private comments: Comment[];

	private newEmail: string;

	private newPassword: string;
	private passwordVerify: string;

	constructor(){ }

	updateUser(){
		
	}

}
