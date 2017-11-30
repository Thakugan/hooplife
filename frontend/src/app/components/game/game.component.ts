import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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
    private gameService: GameService,
    private snackBar: MatSnackBar
  ) {

	}

	ngOnInit() {
	}

	visitPlayer(id: number){

	}

	addComment(){
		this.newComment.username = this.currUser.username;
		this.newComment.rating = 0;
	}

  handlePlayer(){
    if(this.isPlayer){
      this.gameService.deleteRSVP(this.currUser.username, this.game.GameID).subscribe(
        res => {
          this.isPlayer = false;
          this.snackBar.open("You have canceled your rsvp to this game", '', {
            duration: 5000
          });
        },
        err => {
          this.snackBar.open('Could not delete rsvp, please try again', '', {
            duration: 5000
          });
        }
      );
    }
    else{
      this.gameService.rsvp(this.currUser.username, this.game.GameID).subscribe(
        res => {
          this.isPlayer = true;
          this.snackBar.open("You have rsvp'd to this game", '', {
            duration: 5000
          });
        },
        err => {
          this.snackBar.open('Could not rsvp, please try again', '', {
            duration: 5000
          });
        }
      );
    }
  }

}
