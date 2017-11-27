import { Component, Input, OnInit } from '@angular/core';
import { LocationBrowserComponent } from '../../components/location-browser/location-browser.component';

@Component({
  selector: 'app-location-browser-page',
  templateUrl: './location-browser-page.component.html',
  styleUrls: ['./location-browser-page.component.scss']
})

export class LocationBrowsePageComponent implements OnInit {

	private loadPage: boolean = true;

	constructor() {
	}

  	ngOnInit() {
  	}

}