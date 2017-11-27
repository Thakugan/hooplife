import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Comment } from '../../_models/comment';
import { User } from '../../_models/user';
import { Game } from '../../_models/game';
import { Player } from '../../_models/player';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

	private displayComments: boolean = false;
  private isPlayer: boolean = false;

	private game: Game = new Game();
	private user: User = new User();
  private players: Player[] = [];

	private newComment: Comment = new Comment();

	constructor() {

	}

  	ngOnInit() {
  	}

  	private visitPlayer(id: number){

  	}

  	private addComment(){
  		this.newComment.userName = this.user.username;
  		this.newComment.date = new Date();
  		this.newComment.rating = 0;
  		this.newComment.showRating = false;


  	}

    private handlePlayer(){
      if(this.isPlayer){

      }
      else{

      }
    }

}
