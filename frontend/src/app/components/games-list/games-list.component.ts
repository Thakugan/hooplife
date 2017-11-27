import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../_models/game';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

	private allGamesActive: boolean = true;
	private allGames: Game[] = [];
	private attendingGames: Game[] = [];

	constructor() {
	}

  	ngOnInit() {
  	}

  	private allGamesToggle(){
  		this.allGamesActive = true;
  	}

  	private attendingGamesToggle(){
  		this.allGamesActive = false;
  	}

}