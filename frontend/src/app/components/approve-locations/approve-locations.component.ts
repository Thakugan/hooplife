import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../_models/location';

@Component({
  	selector: 'approve-locations',
  	templateUrl: './approve-locations.component.html',
  	styleUrls: ['./approve-locations.component.scss']
})

export class ApproveLocationsComponent implements OnInit{

	private locations: Location[] = [];
	private numOfLocations: number = 0;

	constructor(){

	}

	ngOnInit(){

	}

	private approveLocation(loc_id: number){

	}

	private denyLocation(loc_id: number){
		
	}
}