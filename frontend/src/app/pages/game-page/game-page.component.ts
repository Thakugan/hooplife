import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameComponent } from '../../components/game/game.component';

import { GameService } from '../../_services/game.service';
import { ProfileService } from '../../_services/profile.service';

import { User } from '../../_models/user';
import { Game } from '../../_models/game';
import { Comment } from '../../_models/comment';
import { Location } from '../../_models/location';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {

  user: User;
  game: Game;
  player: boolean;
  players: User[];
  comments: Comment[];
  location: Location;

	constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private profileService: ProfileService
  ) {
	}

	ngOnInit() {
    this.getUser();
    this.getGame();
    this.isPlayer();
    this.getPlayers();
    this.getComments();
    this.getLocation();
	}

  getUser() {
    var currentUser = this.profileService.getCurrentUser();
    this.profileService.getUser(currentUser).subscribe(
      user => {
        this.user = user;
      },
      err => {
        this.user = new User();
      }
    );
  }

  getGame() {
    const gameid = +this.route.snapshot.paramMap.get('gameid');
    this.gameService.getGame(gameid).subscribe(
      game => {
        this.game = game[0];
      },
      err => {
        this.game = new Game();
      }
    );
  }

  isPlayer() {
    const gameid = +this.route.snapshot.paramMap.get('gameid');
    const currentUser = this.profileService.getCurrentUser();
    this.gameService.getRSVPGames(currentUser).subscribe(
      games => {
        for(var game of games) {
          if(game.GameID == gameid) {
            this.player = true;
            return;
          }
        }

        this.player = false;
      },
      err => {
        this.player = false;
        console.log('User does not have any rsvps');
      }
    );
  }

  getPlayers() {
    this.players = [];
  }

  getComments() {
    this.comments = [];
  }

  getLocation() {
    this.location = new Location();
  }
}
