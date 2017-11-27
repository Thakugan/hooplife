import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../_models/game'

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})

export class GameCreateComponent implements OnInit {

  private hasLocations: boolean = false;
  private game: Game = new Game();
  private hour: string;
  private minute: string;
  private amORpm: string;
  private current_user_id: number;

	constructor() {
	}

  ngOnInit() {
  }

  private processRating(rating: number){
    this.game.minimum_rating = rating;
  }

  private createGame(){
    this.game.time_of_game = this.hour + ':' + this.minute + ' ' + this.amORpm;
    this.game.creator_id = this.current_user_id;
  }

}