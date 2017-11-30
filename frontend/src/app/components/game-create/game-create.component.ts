import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../_models/game';
import { Location } from '../../_models/location';
import { LocationService } from '../../_services/location.service';
import { GameService } from '../../_services/game.service';
import { ProfileService } from '../../_services/profile.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})

export class GameCreateComponent implements OnInit {

  private locations: Location[] = [];
  private location_id: number;
  private game_date: Date;
  private hour: string;
  private minute: string;
  private amORpm: string;
  private minimum_rank: number;
  private description: string;

	constructor(
    private locationService: LocationService,
    private gameService: GameService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.locationService.getApprovedLocations().subscribe(
      res => { 
        this.locations = res; 
      },
      err => {
        alert('what did you do');
      });
  }

  processRating(rank: number){
    this.minimum_rank = rank;
  }

  createGame(){

    const current_user = this.profileService.getCurrentUser();

    this.gameService.makeGame(
      current_user, 
      this.game_date + ' ' + this.hour + ':' + this.minute + ' ' + this.amORpm,
      this.description,
      this.minimum_rank,
      this.location_id
    ).subscribe(
      res => {
        this.router.navigate(['/dashboard/games']);
      },
      err => {
        this.snackBar.open('Request failed, please try again.', '', {
          duration: 5000
      });
    )

  }

}
