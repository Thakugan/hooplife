import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../_models/game'

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})

export class GameCreateComponent implements OnInit {

  hasLocations: boolean = false;
  game: Game = new Game();
  hour: string;
  minute: string;
  amORpm: string;
  current_user_id: number;

	constructor() {
	}

  ngOnInit() {
  }

  processRating(rank: number){
    this.game.minimum_rank = rank;
  }

  createGame(){
    this.game.creator_username = this.current_user_id;
  }

}
