import { Component, Input, OnInit } from '@angular/core';
import { LocationBrowserComponent } from '../../components/location-browser/location-browser.component';

@Component({
  selector: 'app-location-browse-page',
  templateUrl: './location-browse-page.component.html',
  styleUrls: ['./location-browse-page.component.scss']
})

export class LocationBrowsePageComponent implements OnInit {

	private loadPage: boolean = true;

	constructor() {
	}

  	ngOnInit() {
  	}

}