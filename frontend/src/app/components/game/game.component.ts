import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar }

import { GameService } from '../../_services/game.service';

import { Comment } from '../../_models/comment';
import { User } from '../../_models/user';
import { Game } from '../../_models/game';
import { Location } from '../../_models/location';

import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

	displayComments: boolean = false;

  @Input() isPlayer: boolean;
	@Input() game: Game;
  @Input() currUser: User;
  @Input() players: User[];
  @Input() comments: Comment[];
  @Input() location: Location;

  newComment: Comment = new Comment();

	constructor(
    private gameService: GameService
  ) {

	}

	ngOnInit() {
	}

	visitPlayer(id: number){

	}

	addComment(){
		this.newComment.userName = this.currUser.username;
		this.newComment.date = new Date();
		this.newComment.rating = 0;
		this.newComment.showRating = false;


	}

  handlePlayer(){
    /*if(this.isPlayer){
      this.gameService.deleteRSVP().subscribe(
        res =>
      );
    }
    else{

    }*/
  }

}
