import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user'
import { Comment } from '../../_models/comment';

import { ProfileService } from '../../_services/profile.service';

@Component({
  	selector: 'app-user-public',
  	templateUrl: './user-public.component.html',
  	styleUrls: ['./user-public.component.css']
})

export class UserPublicComponent{

	displayComments: boolean = false;
	currentUser: string;
	hasCommented: boolean = false;
	hasRated: boolean = false;
	newComment: Comment = new Comment();

	@Input() public user: User;
  @Input() comments: Comment[];

	constructor(
    private profileService: ProfileService
  ){ }

  ngOnInit() {
    this.currentUser = this.profileService.getCurrentUser();
  }

  // TODO change this to hit the api
	addComment() {
      this.newComment.userName = this.currentUser;
      this.newComment.date = new Date();

      this.newComment = new Comment();
      this.hasCommented = true;
    }

    processRating(num: number){
      this.newComment.rating = num;
      this.hasRated = true;
    }
  }
