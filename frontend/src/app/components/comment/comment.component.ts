import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../_models/comment';

@Component({
  	selector: 'comment-block',
  	templateUrl: './comment.component.html',
  	styleUrls: ['./comment.component.css']
})

export class CommentComponent{

	@Input()
	public comment: Comment;

}