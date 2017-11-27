import { Component, Input, OnInit } from '@angular/core';

import { LocationService } from '../../_services/location.service';
import { ProfileService } from '../../_services/profile.service';

import { Location } from '../../_models/location';

@Component({
  	selector: 'approve-locations',
  	templateUrl: './approve-locations.component.html',
  	styleUrls: ['./approve-locations.component.scss']
})

export class ApproveLocationsComponent implements OnInit{

	locations: Location[] = [];
	numOfLocations: number = 0;

	constructor(
    private locationService: LocationService,
    private profileService: ProfileService
  ){

	}

	ngOnInit(){
    this.getUnapprovedLocations();
	}

  getUnapprovedLocations() {
    this.locationService.getUnapprovedLocations().subscribe(
      res => {
        this.locations = res;
        this.numOfLocations = this.locations.length;
      }
    )
  }

	approveLocation(loc_id: number){
    var currUser = this.profileService.getCurrentUser();
    this.locationService.approveLocation(currUser, loc_id).subscribe(
      res => res, err => err
    );
	}

	denyLocation(loc_id: number){
    this.locationService.denyLocation(loc_id).subscribe(
      res => res, err => err
    );
	}

}
